import {useRouter} from 'next/router'
import axios from 'axios'
import { ArticleCard ,ArticleCardMobile} from "../../components/articleCard";
import { SearchBar ,SearchBarMobile} from "../../components/searchBar";
import { useEffect, useState } from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Link from "next/link";
import { LogoCard, LogoCardMobile } from '../../components/logocard';


const resultPage=({data})=>{


  const [offset,setOffset]=useState(3)
  const [articles,setArticles]=useState([])
  const [count,setCount]=useState(0)


  const router=useRouter()

  if(!data){
    return
  }

  useEffect(()=>{

    // console.log(data)
    setCount(data.result?.count)
    setArticles(data.result?.rows.slice(0,offset))



  },[offset,router.query])

  useEffect(()=>{
    setOffset(10)
  },[router.query])



  useEffect(()=>{

    const handleScroll=()=>{
      if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&offset<=count){
        setOffset(offset+5)
        // console.log("scrolled")
      }
    }

    window.addEventListener('scroll',handleScroll);

    ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  })

  



  return <div className="flex min-h-screen items-start justify-center font-poppins ">
      
      

      <LogoCard/>


        <div className="hidden desktop:flex flex-[0.65] p-10  justify-center h-full  ">
        
          
          
        <div className="flex w-full   space-x-3 justify-center ">

<div className='flex flex-col w-full max-w-[700px]'>

<div className='flex px-10  items-center space-x-3 '>

          
<Link href='/'>
<button className='absolute left-0 top-1 hover:bg-slate-200 rounded-full p-1  cursor-pointer'>
<KeyboardBackspaceRoundedIcon sx={{ fontSize: 30 }}/>
</button>
</Link>

<h1 className='text-xl text-primary font-[500]'>Results</h1>
<p className="text-lg  text-quarternary  font-[200]">Total Count:{count}</p>

</div>


        {articles?.length>0?<div className=''>{articles.map((article)=>{
            return <ArticleCard data={article}/>
        })}</div>:<div className="flex flex-col text-gray-600 font-[400] items-start p-10">

            <h1>
            Make sure all words are spelled correctly. </h1>
          
          <h1>Try different keywords.</h1>

          <h1>Try more general keywords.</h1>
    
          
          </div>}


        </div>
            
        </div>
 
        </div>



        <div className='flex flex-[1] flex-col items-center py-12  desktop:hidden'>
        <LogoCardMobile/>

        <SearchBarMobile/>

        <div className='flex  p-1 items-center justify-start px-5 w-full space-x-3 '>
      
      <Link href='/'><KeyboardBackspaceRoundedIcon sx={{ fontSize: 30 }}/></Link>
      <h1 className='text-lg text-primary font-[500]'>Results</h1>
      <p className="text-base  text-quarternary  font-[200]">Total Count:{count}</p>

        </div>

      {articles?.length>0?<div>{articles.map((article)=>{
            return <ArticleCardMobile data={article}/>
        })}</div>:<div className="flex flex-col text-gray-600 font-[400] items-start py-12">

            <h1>
            Make sure all words are spelled correctly. </h1>
          
          <h1>Try different keywords.</h1>

          <h1>Try more general keywords.</h1>
    
          
          </div>}



          </div>
 
          <SearchBar />
  </div>  



}


export async function getServerSideProps({query}){
  // console.log(query)
  try{


    const response=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/search/`,{
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