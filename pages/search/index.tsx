import type { NextPage } from "next";
import {useRouter} from 'next/router'
import axios from 'axios'
import { ArticleCard } from "../../components/articleCard";
import { SearchBar } from "../../components/searchBar";
import { useEffect, useState } from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Link from "next/link";


const resultPage:NextPage=({data})=>{


  const [offset,setOffset]=useState(3)
  const [articles,setArticles]=useState([])
  const [count,setCount]=useState(0)


  const router=useRouter()

  if(!data){
    return
  }

  useEffect(()=>{

    console.log(data)
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
        console.log("scrolled")
      }
    }

    window.addEventListener('scroll',handleScroll);

    ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  })

  



  return <div className="flex min-h-screen items-start justify-between font-poppins ">
      
      
      
      

       {articles?
       
  
        <div className="flex flex-[0.75]  justify-center   ">
          <div className="absolute left-4 top-3 hover:bg-slate-200 rounded  cursor-pointer" >
          
          <Link href='/'><KeyboardBackspaceRoundedIcon sx={{ fontSize: 30 }}/></Link>
          </div>
          
          
        <div className="flex  px-10  space-x-3 justify-center ">

<div className='flex flex-col w-[600px]'>

<div className='flex px-2 py-2 items-baseline space-x-3'>
<h1 className='text-xl text-primary font-[500]'>Results</h1>
<p className="text-lg  text-quarternary  font-[200]">Total Count:{count}</p>

</div>


        {articles.map((article)=>{
            return <ArticleCard data={article}/>
        })}
              </div>
        </div>
        </div>
      :<h1>No Search Results</h1>} 

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