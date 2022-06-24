import {ArticleCard,ArticleCardMobile} from "./articleCard" 
import { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios'
import { Spinner } from "@chakra-ui/react";
import {useSession} from 'next-auth/react'

import {useRouter} from 'next/router'

export const ArticlesContainer=({options,all,articles,setArticles})=>{



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


  

    

    
    return<div className="hidden desktop:flex  flex-col  items-center min-h-screen">
    

  {loading&&<Spinner/>}
  {articles&&articles.map((element)=>{
   
   return <ArticleCard data={element}/>
  })}
   



    </div>
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

        const response=await axios.get(`http://localhost:4000/articles/search?author=${name}`,{



        })


        setCount(response.data.result.rows.length)
        setArticles(response.data.result.rows.filter((element)=>{
          return element.id!==id
        }))
     
      }
  
      catch(err){
  
      }
    }


    fetchData()

  },[id])


  const handleClick=()=>{
  
    setOffset(offset+1)


  }

  return <div className='flex flex-col   '>
  
  {count&&<div className="flex flex-col   py-10 font-poppins my-10">

      <div className="flex flex-col   items-center">
      <h1 className="text-lg desktop:text-2xl text-primary font-[500]">More From {name}</h1>


      <div className='hidden tablet:flex'>
          {articles.slice(0,offset).map((article)=>{

            return <ArticleCard data={article}/>
          })}
          </div>

          <div className='flex w-full  tablet:hidden'>

          {articles.slice(0,offset).map((article)=>{

            return <ArticleCardMobile data={article}/>
          })}
          </div>

      
{(offset+1<count)&&<button className="text-base text-white bg-primary rounded-[20px] w-[300px] font-[500]  py-2 my-4" onClick={handleClick}>Read More from {name.split(' ')[0]}</button>}
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
        const response=await axios.delete(`http://localhost:4000/admin/article/${id}`,{
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