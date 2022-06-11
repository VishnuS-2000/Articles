import type { NextPage } from 'next'
import axios from "axios"
import Head from 'next/head'
import Image from "next/image"
import { useState } from 'react'

import Logo from "../public/assets/index/cusat-logo.png"
import { useEffect } from 'react';
import { ArticlesContainer } from './components/container';




const Home: NextPage = ({data}) => {  



  useEffect(()=>{
    

  },[])

  
  const [all,setAll]=useState<boolean>()
  const [limit,setLimit]=useState<number>(3)

  useEffect(()=>{
    console.log(data)
    window.addEventListener('scroll',(e)=>{
      if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&limit<=data.result.count){
        setLimit(limit+3)
      }
    })

  })



  return (

    <div className="flex min-h-screen items-start justify-start w-full">
        <div className="h-screen flex-[0.10] px-2 py-2">
            <Image src={Logo} height={'88px'} width={'148px'}/>
           

        </div>

    <div className='flex flex-[0.70] px-4 py-5 flex-col space-y-5 justify-end relative'>
    

          <div className="flex space-x-8 w-[75%] p-2">
          <button className={`text-base transition duration-200 ${all?'text-primary ':'text-quarternary '}`} onClick={()=>setAll(true)}>All Articles</button>
          <button className={`text-base transition duration-200 ${!all?'text-primary ':'text-quarternary '}`} onClick={()=>setAll(false)}>New Articles</button>
        

        </div>

    <ArticlesContainer articles={data.result} limit={limit}/>

    </div>

        


    </div>
  )
  }



  export async function getServerSideProps(){


    try{
  
      const response=await axios.get('http://localhost:4000/articles')
      return {props:{
        data:response.data
      }}
      
    }
  
    catch(err){
        return {
          props:{
            data:{}
          }
        }
    }
  
  }



export default Home