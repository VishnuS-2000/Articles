import type { NextPage } from 'next'
import axios from "axios"
import { ArticlesContainer } from './components/container';
import {SearchBar} from "./components/search"

import { useEffect,useState } from 'react';





const Home: NextPage = () => {  

  const [all,setAll]=useState(true)
  const [options,setOptions]=useState({url:'http://localhost:4000/articles',orderField:'title',orderType:'ASC',offset:0,limit:4,params:null})
  const [articles,setArticles]=useState([])




  useEffect(()=>{
    const handleScroll=()=>{
      
        if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
          
          setOptions({...options,offset:options.offset+options.limit})
          
  
        }
      
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)


    
  })



  return (
    <div className="flex  items-start justify-between min-h-screen ">

        <div className="flex flex-[0.75]  justify-center  ">

          
        <div className="flex flex-col px-10  space-x-3  ">


<div className="flex flex-col">

<div className="flex px-2 py-2 space-x-3  ">

<button className={`text-base transition duration-200 ${all?'text-primary ':'text-quarternary '}`} onClick={()=>{setAll(true); setArticles([]); setOptions(!all?{url:'http://localhost:4000/articles',orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:'http://localhost:4000/articles',orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})}}>All Articles</button>

<button className={`text-base transition duration-200 ${!all?'text-primary ':'text-quarternary '}`} onClick={()=>{setAll(false); setArticles([]); setOptions(!all?{url:'http://localhost:4000/articles',orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:'http://localhost:4000/articles',orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})} }>New Articles</button>

</div>


<ArticlesContainer all={all} options={options} articles={articles} setArticles={setArticles}/>
</div>





  
  </div>  


    </div>

    <SearchBar />

  </div>
  )
  }




export default Home