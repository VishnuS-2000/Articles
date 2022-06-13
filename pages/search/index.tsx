import type { NextPage } from "next";
import {useRouter} from 'next/router'
import axios from 'axios'
import { ArticleCard } from "../components/card";
import { SearchBar } from "../components/search";
import { useEffect, useState } from 'react';



const resultPage:NextPage=({data})=>{


  const [offset,setOffset]=useState(3)
  const [articles,setArticles]=useState([])
  const [count,setCount]=useState(0)


  const router=useRouter()

  useEffect(()=>{

    setCount(data.result.count)
    setArticles(data.result.rows.slice(0,offset))



  },[offset,router.query])

  useEffect(()=>{
    setOffset(3)
  },[router.query])



  useEffect(()=>{

    const handleScroll=()=>{
      if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&offset<=count){
        setOffset(offset+3)
      }
    }

    window.addEventListener('scroll',handleScroll);

    ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  })



  return <div className="flex min-h-screen items-start justify-between">
       {articles?<div className='flex-[0.75] flex flex-col px-4 py-5 self-center'>

        <div className="flex flex-col  items-center ">
            <div className="flex w-[720px] px-2 py-2 space-x-3 items-center">

            <h1 className='text-2xl text-primary font-[500]'>Results</h1>
            <p className="text-lg  text-quarternary  font-[200]">Total Count:{count}</p>

            </div>
         
        </div>

        <div className="flex flex-col items-center min-h-screen">
      
        {articles.map((article)=>{
            return <ArticleCard data={article}/>
        })}</div>
      </div>:<h1>No Search Results</h1>} 
      <SearchBar />
  
  </div>  



}


export async function getServerSideProps({query}){
  console.log(query)
  try{


    const response=await axios.get('http://localhost:4000/articles/search/',{
      params:query
    })

    return {
      props:{
        data:response.data
      }
    }

  }


  catch(err){
    console.log(err)
    return {
      props:{
        data:{}
      }
    }
  }

}

export default resultPage;