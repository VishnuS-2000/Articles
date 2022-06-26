import {ArticleCard,ArticleCardMobile} from "./articleCard" 
import { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios'
import { Spinner } from "@chakra-ui/react";
import {useSession} from 'next-auth/react'

import {useRouter} from 'next/router'



export const ArticlesContainer=({options,all})=>{



  const[count,setCount]=useState(0)
  const[loading,setLoading]=useState(true)
  const[articles,setArticles]=useState([])
  const router=useRouter()






  // useEffect(()=>{

    

  //   // const fetchData=async()=>{


  //   //      try{
  //   //      const response=await axios.get(options.url,{
  //   //           headers:{
  //   //             orderField:options.orderField,
  //   //             orderType:options.orderType,
  //   //             limit:options.limit,
  //   //             offset:options.offset
  //   //           }
  //   //      })

  //   //      setLoading(false)


        
  //   //      setArticles(articles.concat(response.data.result.rows))

  //   //      if(count==0){
  //   //        setCount(response.data.result.count)
  //   //      }

       
  //   //    }
       
  //   //    catch(err){
          
  //   //       return {response:{}}
  //   //    }
       
  //   //    }
     

  //   //    fetchData()
  //   //    },[all,options.offset])


  
    return    <InfiniteScroll
    pageStart={0}
    loadMore={async() =>await fetchData()}
    hasMore={true || false}
    useWindow={false}
    loader={
      <div key="loading" className="loader">
        Loading ...
      </div>
    }
  >
<h1>Hello</h1>
  </InfiniteScroll>
    

    
  //   return<div className="hidden desktop:flex  flex-col  items-center min-h-screen">
    

  // {loading&&<Spinner/>}
  // {articles&&articles.map((element)=>{
   
  //  return <ArticleCard data={element}/>
  // })}
   



  //   </div>
}



export const ArticlesContainerMobile=({options,all,articles,setArticles})=>{



  const[count,setCount]=useState(0)
  const[loading,setLoading]=useState(true)

  const router=useRouter()
  
  useEffect(()=>{

    

    const fetchData=async()=>{


         try{
         const response=await axios.get(options.url,{
              headers:{
                orderField:options.orderField,
                orderType:options.orderType,
                limit:options.limit,
                offset:options.offset
              }
         })

         setLoading(false)


        
         setArticles(articles.concat(response.data.result.rows))

         if(count==0){
           setCount(response.data.result.count)
         }

       
       }
       
       catch(err){
          
          return {response:{}}
       }
       
       }
     

       fetchData()
       },[all,options.offset])


  

    

    
    return<div className="flex  flex-col  items-center min-h-screen desktop:hidden">
    
    {loading&&<Spinner/>}
    {articles&&articles.map((element)=>{
     
     return <ArticleCardMobile data={element}/>
    })}




    </div>
}






























export const MoreContainer=({id,name})=>{



  const [articles,setArticles]=useState([])
  const [offset,setOffset]=useState(1)
  const[count,setCount]=useState(0)
  
  useEffect(()=>{


    const fetchData=async()=>{

      try{

        const response=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/search?author=${name}`,{



        })

        // console.log(response.data.result)
        // console.log(id)
        

        if(response.data){
          setArticles(response.data.result.rows.filter((element)=>{
            return element.id!==id
          }))
          // console.log(articles.length)
          setCount(articles.length)
   
        }
   
          
      }


 
      catch(err){
  
      }
    }


    fetchData()

  },[id])



  // console.log(articles,count)

  return <div className='flex flex-col   '>
  
  {articles.length>0&&<div className="flex flex-col   py-10 font-poppins my-10">

      <div className="flex flex-col   items-start">
      <h1 className="text-lg desktop:text-2xl text-primary font-[500] mb-5 ">More From {name}</h1>


      <div className='hidden tablet:flex flex-col overflow-y-auto overscroll-contain  my-5 h-[400px] w-full'>
          {articles.map((article)=>{

            return <ArticleCard data={article}/>
          })}
          </div>

          <div className='flex flex-col w-full overflow-y-auto h-[400px]  tablet:hidden'>

          {articles.map((article)=>{

            return <ArticleCardMobile data={article}/>
          })}
          </div>

      

      </div>

  </div>}

  </div> 

}


export const ViewContainer=({data})=>{

  const {data:session}=useSession()

  const router=useRouter()

  // console.log(data)
  const handleDelete=async(id)=>{
    // console.log(id)
    try{
        const response=await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/article/${id}`,{
            headers:{
                'Authorization':`Bearer ${session.accessToken}`
            }
        })
        router.push(`/admin/dashboard/authors/view/${data.result.id}`)
    }
    catch(err){
        // console.log(err)
    }
}


  return <div className='overflow-y-auto max-h-[650px] w-[650px]'>
  {data.result.articles.map((element)=>{

    // console.log(element)
    return <ArticleCard data={{author:{photo:data.result.photo,name:data.result.name,id:data.result.id},content:element.content,topic:element.topic,createdAt:element.createdAt,richText:element.richText,id:element.id,title:element.title}} deleteOption={true} handleDelete={handleDelete}/>
})}

  </div>

}