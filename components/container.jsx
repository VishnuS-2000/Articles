import {ArticleCard,ArticleCardMobile} from "./articleCard" 
import { useEffect, useState,useRef } from 'react';
import Link from "next/link";
import axios from 'axios'
import { Spinner } from "@chakra-ui/react";
import {useSession} from 'next-auth/react'

import {useRouter} from 'next/router'
import moment from "moment";



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
  
  {articles.length>0&&<div className="flex flex-col   py-10 font-poppins">

      <div className="flex flex-col   items-start">
      <h1 className="text-xl tablet:text-xl desktop:text-xl text-black font-[500] mb-5 ">More From Author</h1>


  

          <div className='flex flex-col w-full overflow-y-auto h-[400px] '>

          {articles.map((article)=>{

            return <MoreContainerItem data={article}/>
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







export const MoreContainerItem=({data})=>{

  const [extras,setExtras]=useState({
    ago:'',
    minRead:''
})

const [imageUrl,setImageUrl]=useState()




const refContainer=useRef()

useEffect(()=>{
   
    const diff=['seconds','minutes','hours','days','months','years']
    const limits=[60,60,24,30,12,100]
    const i=0
    const result=0
    const ago=''
    while(i<diff.length){
        result=moment().diff(data.createdAt,diff[i])
        if(result<limits[i]){
            ago=`${result} ${diff[i]} ago`;
            break;
        }
        i=i+1
    }
    const minRead=Math.ceil(data.content.split(' ').length/275);
  
    setExtras({
        ...extras,minRead,ago
    })



},[])


useEffect(()=>{

    refContainer.current.innerHTML=data.richText

    const id=Math.ceil(Math.random()*1000)
    setImageUrl(refContainer.current.getElementsByTagName('img')[0]?.getAttribute('src'))



},[])



  return <div className="flex w-full  py-2  space-y-2   border-gray-300  font-[300] ">
    

  <div className="flex flex-col space-y-2 items-start">


  <div className="flex flex-col justify-start space-y-1 ">
  



  <Link href={`/articles/${data.id}`}>
  <h1 className="text-primary text-xl desktop:text-lg font-[600] cursor-pointer">{data.title}</h1>

  </Link>



  </div>


  <div className="flex text-xs  text-tertiary justify-between items-start py-2">
      <div className="flex space-x-3 items-center">
      <p className="bg-[#F2F2F2] px-2 py-1 rounded-2xl cursor-pointer">{data.topic}</p>
      <p>{data.minRead}{extras.minRead} min read</p>
      <p>{extras.ago}</p>

      </div>



      



      
  
      </div>

  </div>



  <div ref={refContainer} className="hidden"></div>


  </div>
}