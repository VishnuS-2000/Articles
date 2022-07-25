import moment from "moment";


import axios from 'axios'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import Article from "../../components/article";
import { SearchBar } from "../../components/searchBar";

import { AuthorCard } from "../../components/authorCard";

import { useState,useEffect } from "react";
import {AuthorDetail} from '../../components/authorDetailCard'
import {MoreContainer} from '../../components/container'
import {Footer} from '../../components/footer'
import {LogoCard,LogoCardMobile} from '../../components/logocard'


const ArticlePage=({data})=>{

    
    const [extras,setExtras]=useState({})
    const [readMoreLimit,setReadMoreLimit]=useState(20480)

    const [visible,setVisible]=useState(false)

    const [progress,setProgress]=useState(0)

   


    useEffect(()=>{

        const date=moment(data.result.createdAt).format('LL')   
        const minRead=`${Math.ceil(data.result.content.split(' ').length/275)} min read`;
        
        setExtras({
            date,minRead
        })



    },[data.result.id])



    const handleLimit=(inc)=>{
        setReadMoreLimit(readMoreLimit+inc)
    }

    const handleScroll=()=>{
        setProgress(Math.ceil((window.scrollY/document.body.scrollHeight)*100))
        
        if(Math.ceil((window.scrollY/document.body.scrollHeight)*100)>25){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }


    const handleScrollToTop=()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

    }


    useEffect(()=>{


        window.addEventListener('scroll',handleScroll)

    return ()=>{window.removeEventListener('scroll',handleScroll)}


    })



return  <div className='flex min-h-screen items-start justify-center   w-full  font-[poppins] '>



<div className='flex flex-col w-[100%]'>

<LogoCard/>



<div className="flex-[1]   desktop:flex  w-full pb-10   ">



<div className='flex flex-[0.75] justify-center relative'>




<div className="px-6 py-12 w-full  tablet:px-10 desktop:relative max-w-[900px] desktop:py-2 mb-10 flex flex-col  ">


{visible&&<button className="fixed right-[5px] z-50 bottom-[20px] bg-primary text-white p-2 rounded-full hover:bg-slate-600 duration-500 desktop:right-[28%] " onClick={handleScrollToTop}>
<KeyboardArrowUpIcon/>
</button>}



<LogoCardMobile/>
        <AuthorCard name={data.result.author.name} photo={data.result.author.photo} extras={extras}/>
        <Article article={data.result} limit={readMoreLimit} setLimit={setReadMoreLimit}/>
        
        {readMoreLimit<=data.result.richText.length&&<div className='flex justify-center items-center  relative bottom-8 h-[80px] desktop:absolute  w-full backdrop-blur bg-black/10 left-[0] desktop:h-[150px] max-w-full desktop:left-[20px] desktop:bottom-0'>
        <button className="flex items-center justify-center p-2  h-full w-full rounded-xl font-[600] text-primary desktop:hidden" onClick={()=>{handleLimit(10240)}}>Read More</button>
        <button className="hidden p-2  h-[50px] w-[120px] rounded-xl font-[600] text-primary desktop:flex" onClick={()=>{handleLimit(20480)}}>Read More</button>
        </div>}

        <div className="flex desktop:hidden">
        <MoreContainer name={data.result.author.name} id={data.result.id}/>
        
        </div>

</div>

<div>

</div>


<div className="hidden desktop:flex  ">

</div>

</div>

<AuthorDetail author={data.result.author} id={data.result.id}/>
</div>

<Footer/>
</div>





</div>

}

export async function getServerSideProps({params}){


try{
    const response=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${params.id}`)

    // console.log(response)
    return {props:{
        data:response.data
    }}
}

catch(err){

    return {props:{
        data:{}
    }}

}


}


export default ArticlePage
