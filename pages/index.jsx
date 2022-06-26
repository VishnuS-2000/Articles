
import {ArticleCard,ArticleCardMobile} from "../components/articleCard" 

import {SearchBar,SearchBarMobile} from "../components/searchBar"
import {LogoCard,LogoCardMobile} from "../components/logocard"
import { useEffect,useState } from 'react';
import { Spinner } from "@chakra-ui/react";
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroller";


const Home= ({data}) => {  

  const [all,setAll]=useState(true)
  const [options,setOptions]=useState({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null})
  const [articles,setArticles]=useState([])
  const [count,setCount]=useState(0)



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
    fetchData(5)
    setArticles(data.result?.rows)


  },[])



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

      <LogoCard/>

        <div className="hidden  desktop:flex  flex-[0.65]   p-5   justify-center  ">

          
        <div className="flex flex-col   space-x-3  max-w-[700px]">


        <div className=" p-8 space-x-3  justify-start w-[500px] ">
      

<button className={` text-lg font-[500] transition duration-200 ${all?'text-primary ':'text-slate-300 '}`} onClick={()=>{setAll(true); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})}}>All Articles</button>
<button className={`text-lg  font-[500] transition duration-200 ${!all?'text-primary ':'text-slate-300 '}`} onClick={()=>{setAll(false); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})} }>New Articles</button>

</div>






<InfiniteScroll
        pageStart={0}
        loadMore={() =>{fetchData(articles.length+10)}}
        hasMore={articles?.length < count?true:false}
        useWindow={true}
        loader={
          <div key="loading" className="flex w-full justify-center">
            <Spinner/>
          </div>
        }
      >
      
      {articles && articles.map((element)=>{

        return <ArticleCard key={element.id} data={element}/>
      })
      }
      </InfiniteScroll>


















  
  </div>  

    </div>

    <div className='flex flex-col items-center w-full py-12  desktop:hidden'> 
    <LogoCardMobile/>
    <SearchBarMobile/>

    <div className='flex space-x-3 p-5'>
    <button className={` text-lg font-[500] transition duration-200 ${all?'text-primary ':'text-slate-300 '}`} onClick={()=>{setAll(true); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})}}>All Articles</button>
<button className={`text-lg  font-[500] transition duration-200 ${!all?'text-primary ':'text-slate-300 '}`} onClick={()=>{setAll(false); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})} }>New Articles</button>

    </div>



<InfiniteScroll
        pageStart={0}
        loadMore={() =>{fetchData(articles.length+5)}}
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
    <SearchBar />
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
           limit:5
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