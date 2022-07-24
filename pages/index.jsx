
import {ArticleCard,ArticleCardMobile} from "../components/articleCard" 

import {SearchBar,SearchBarMobile} from "../components/searchBar"
import {LogoCard,LogoCardMobile} from "../components/logocard"
import { useEffect,useState } from 'react';
import { Spinner } from "@chakra-ui/react";
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroller";


import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Box } from '@chakra-ui/react'

const Home= ({data}) => {  


  const [options,setOptions]=useState({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null})
  const [articles,setArticles]=useState([])
  const [count,setCount]=useState(0)
  const [loading,setLoading]=useState(false)
  const [tab,setTab]=useState('all')



  const fetchData=async(limit)=>{

    try{
    const response=await axios.get(options.url,{
         headers:{
           orderField:options.orderField,
           orderType:options.orderType,
           offset:options.offset,
           limit:limit
         }
    })

   

    setArticles(response.data.result.rows)
    setCount(response.data.result.count)

    

  
  }
  
  catch(err){
     
     return {response:{}}
  }
  
  }

  useEffect(()=>{

    setArticles(data?.result.rows)

  },[])


  useEffect(()=>{
    setLoading(true)
    fetchData(3)
    setLoading(false)


  },[tab])





// console.log(articles)













  // useEffect(()=>{
  //   const handleScroll=()=>{
      
  //       if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
  //         alert('scroll')
   
  //         setOptions({...options,offset:options.offset+options.limit})
          
  
  //       }
      
  //   }
  //   window.addEventListener('scroll',handleScroll)
  //   return ()=>window.removeEventListener('scroll',handleScroll)


    
  // })



  return (
    <div className="flex items-start  justify-center min-h-screen font-poppins w-full ">


    <div className="hidden desktop:flex flex-col w-full">
    <LogoCard/>
      <div className="w-full flex justify-between ">

      <div className="flex flex-[0.80] justify-center">
        <div className="flex flex-col   space-x-3  w-[85%]">


        <div className="flex p-6 space-x-8  w-[85%] ">
      

<button className={` text-lg font-[500] transition duration-200 ${tab=='all'?'text-primary ':'text-slate-300 '}`} onClick={()=>{setTab('all');  setArticles([]); setOptions({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:3,params:null})}}>All Articles</button>
<button className={`text-lg  font-[500] transition duration-200 ${tab=='new'?'text-primary ':'text-slate-300 '}`} onClick={()=>{setTab('new');  setArticles([]); setOptions({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:3,offset:0,params:null})} }>New Articles</button>
<button className={`text-lg  font-[500] transition duration-200 ${tab=='stud'?'text-primary ':'text-slate-300 '}`} onClick={()=>{setTab('stud');  setArticles([]); setOptions({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/student`,orderField:'title',orderType:'ASC',offset:0,limit:3,params:null})} }>Students</button>


</div>






<InfiniteScroll
        pageStart={0}
        loadMore={() =>{fetchData(articles.length+3)}}
        hasMore={articles?.length < count?true:false}
        useWindow={true}
        loader={
          <div key="loading" className="space-y-5">
          <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={5} spacing='4' />
        </Box>



          </div>
        }
      >

      {articles && articles.map((element)=>{

        return <ArticleCard key={element.id} data={element}/>
      })}
      
      
      {loading && <div key="loading" className="space-y-5">
      <Box padding='6' boxShadow='lg' bg='white'>
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={5} spacing='4' />
    </Box>

    <Box padding='6' boxShadow='lg' bg='white'>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={5} spacing='4' />
  </Box>


  <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={5} spacing='4' />
</Box>

  



      </div>
      }

      
      </InfiniteScroll>











      </div>






  
  </div>  
  <SearchBar />
    </div>
    </div>




    <div className='flex flex-col items-center w-full py-12  desktop:hidden'> 
    <LogoCardMobile/>
    <SearchBarMobile/>

    <div className='flex space-x-5 p-5'>

  
<button className={` text-md font-[500] transition duration-200 ${tab=='all'?'text-primary ':'text-slate-300 '}`} onClick={()=>{setTab('all');  setArticles([]); setOptions({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:3,params:null})}}>All Articles</button>
<button className={`text-md  font-[500] transition duration-200 ${tab=='new'?'text-primary ':'text-slate-300 '}`} onClick={()=>{setTab('new');  setArticles([]); setOptions({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:3,offset:0,params:null})} }>New Articles</button>
<button className={`text-md  font-[500] transition duration-200 ${tab=='stud'?'text-primary ':'text-slate-300 '}`} onClick={()=>{setTab('stud');  setArticles([]); setOptions({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/student`,orderField:'title',orderType:'ASC',offset:0,limit:3,params:null})} }>Students</button>



   

    </div>



<InfiniteScroll
        pageStart={0}
        loadMore={() =>{fetchData(articles.length+3)}}
        hasMore={articles?.length < count?true:false}
        useWindow={true}
        loader={
          <div key="loading" className="flex w-full justify-center">
            <Spinner/>
          </div>
        }
      >
      
      {articles&&articles.map((element)=>{

        return <ArticleCardMobile key={element.id} data={element}/>
      })
      }
      </InfiniteScroll>



    
    </div>

  </div>
  )
  }











  
export async function getServerSideProps(){

try{
    const response=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,{
         headers:{
           orderField:'title',
           orderType:'ASC',
           offset:0,
           limit:3
         }
    })



    return {
      props:{
        data:response.data
      }
    }


  
  }
  
  catch(err){
     
     return {
       props:{
         data:{}
       }}
  }
  
  }




export default Home