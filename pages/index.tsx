

import { ArticlesContainer,ArticlesContainerMobile } from '../components/container'
import {SearchBar,SearchBarMobile} from "../components/searchBar"
import {LogoCard,LogoCardMobile} from "../components/logocard"
import { useEffect,useState } from 'react';





const Home= () => {  

  const [all,setAll]=useState(true)
  const [options,setOptions]=useState({url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null})
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
    <div className="flex items-start  justify-center min-h-screen font-poppins w-full ">

      <LogoCard/>

        <div className="hidden tablet:flex-[0.90] desktop:flex  flex-[0.70]   p-5   justify-center  ">

          
        <div className="flex flex-col   space-x-3  max-w-[900px]">


        <div className="flex p-8 space-x-3  justify-center ">
      

<button className={` text-lg font-[500] transition duration-200 ${all?'text-primary ':'text-slate-300 '}`} onClick={()=>{setAll(true); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})}}>All Articles</button>
<button className={`text-lg  font-[500] transition duration-200 ${!all?'text-primary ':'text-slate-300 '}`} onClick={()=>{setAll(false); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})} }>New Articles</button>

</div>


<ArticlesContainer all={all} options={options} articles={articles} setArticles={setArticles}/>





  
  </div>  

    </div>

    <div className='flex flex-col items-center w-full py-12  desktop:hidden'> 
    <LogoCardMobile/>
    <SearchBarMobile/>

    <div className='flex space-x-3 p-5'>
    <button className={` text-lg font-[500] transition duration-200 ${all?'text-primary ':'text-quarternary '}`} onClick={()=>{setAll(true); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})}}>All Articles</button>
    <button className={`text-lg  font-[500] transition duration-200 ${!all?'text-primary ':'text-quarternary '}`} onClick={()=>{setAll(false); setArticles([]); setOptions(!all?{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'title',orderType:'ASC',offset:0,limit:4,params:null}:{url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,orderField:'createdAt',orderType:'DESC',limit:4,offset:0,params:null})} }>New Articles</button>

    </div>
    <ArticlesContainerMobile all={all} options={options} articles={articles} setArticles={setArticles}/>



    
    </div>
    <SearchBar />
  </div>
  )
  }




export default Home