import {ArticleCard} from "./card" 
import { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios'


export const ArticlesContainer=({options,all,articles,setArticles})=>{



  const[count,setCount]=useState(0)


  
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







  


  

    

    
    return<div className="flex  flex-col min-h-screen items-center ">

     {articles?articles.map((element)=>{
      
      return <ArticleCard data={element}/>
     }):<h1>Loading...</h1>}
   

    </div>
}






