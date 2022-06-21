import {ArticleCard} from "./articleCard" 
import { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios'
import { Spinner } from "@chakra-ui/react";


export const ArticlesContainer=({options,all,articles,setArticles})=>{



  const[count,setCount]=useState(0)
  const[loading,setLoading]=useState(true)

  
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
          console.log(err)
          return {response:{}}
       }
       
       }
     

       fetchData()
       },[all,options.offset])


  

    

    
    return<div className="flex  flex-col  items-center min-h-screen">
      
    {loading&&<Spinner/>}
     {articles&&articles.map((element)=>{
      
      return <ArticleCard data={element}/>
     })}
   

    </div>
}






export const MoreContainer=({id,name})=>{



  const [articles,setArticles]=useState([])
  const [count,setCount]=useState(0)
  const [offset,setOffset]=useState(1)
  
  useEffect(()=>{


    const fetchData=async()=>{

      try{

        const response=await axios.get(`http://localhost:4000/articles/search?author=${name}`,{



        })
        
        setCount(response.data.result.count)
        console.log(response.data.result)
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
  
    setOffset(offset+2)


  }

  return <div>
  
  {articles.length>0?<div className="flex flex-col items-center py-10 font-poppins">

      <div className="flex flex-col items-start w-full">
      <h1 className="text-2xl text-primary font-[500]">More From {name}</h1>
          {articles.slice(0,offset).map((article)=>{

            return <ArticleCard data={article}/>
          })}

      </div>

<button className="text-base text-white bg-primary rounded-[20px] w-[300px] font-[500]  py-2 my-4" onClick={handleClick}>Read More from {name.split(' ')[0]}</button>

  </div>:<h1></h1>}

  </div> 

}