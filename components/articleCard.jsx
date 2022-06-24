import Image from "next/image"
import moment from "moment"
import { useEffect, useState,useRef } from 'react';
import Link from "next/link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {useRouter} from 'next/router'
import axios from 'axios'

//Article Card Component

export const ArticleCard=({data,deleteOption,handleDelete})=>{
    
    const [extras,setExtras]=useState({
        ago:'',
        minRead:''
    })

    const [imageUrl,setImageUrl]=useState()




    const refContainer=useRef()
    
    useEffect(()=>{
       
        const diff=['seconds','minutes','hours','days','months','years']
        const limits=[60,60,24,30,12,100]
        const i=0
        const result=0
        const ago=''
        while(i<diff.length){
            result=moment().diff(data.createdAt,diff[i])
            if(result<limits[i]){
                ago=`${result} ${diff[i]} ago`;
                break;
            }
            i=i+1
        }
        const minRead=Math.ceil(data.content.split(' ').length/275);
      
        setExtras({
            ...extras,minRead,ago
        })



    },[])


    useEffect(()=>{

        refContainer.current.innerHTML=data.richText

        const id=Math.ceil(Math.random()*1000)
        setImageUrl(refContainer.current.getElementsByTagName('img')[0]?.getAttribute('src')||`https://picsum.photos/id/${id}/300/300`)



    },[])


 
    

    return <div className="flex  px-2 py-8 max-w-[900px] space-y-2  border-line border-t font-[300] ">
    

    <div className="flex flex-col space-y-2 ">
    <div className="flex space-x-3 justify-start items-center space-y-0  ">
    {data.author.photo?<img src={data.author.photo} className="rounded-full w-[24px] h-[24px]"/>:<AccountCircleIcon style={{fontSize:'2rem'}}/>}
    <p className="text-base text-secondary">{data.author.name}</p>
    <p className="text-base text-quarternary">{extras.ago}</p>
    </div>

    <div className="flex flex-col justify-start space-y-1 mr-6">
    
    <Link href={`/articles/${data.id}`}>
    <h1 className="text-primary text-xl font-[400] cursor-pointer">{data.title}</h1>
    </Link>
    <p className="text-secondary font-[300]">{data.content.slice(0,240)}...</p>


    </div>


    <div className="flex text-sm  text-tertiary justify-between items-start py-2">
        <div className="flex space-x-3 items-center">
        <p className="bg-[#F2F2F2] px-2 py-1 rounded-2xl cursor-pointer">{data.topic}</p>
        <p>{data.minRead}{extras.minRead} min read</p>
        <p>Selected for you</p>

        </div>

{deleteOption&&<button onClick={()=>{handleDelete(data.id)}}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M3 6H5H21" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11V17" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>

}


        



        
    
        </div>

    </div>

    <div className="drop-shadow-sm  max-w-[150px]">
    <img src={imageUrl} className="float-right cursor-pointer" alt="article-image" />
    </div>

    <div ref={refContainer} className="hidden"></div>


    </div>


}



export const ArticleCardMobile=({data,deleteOption,handleDelete})=>{
    
    const [extras,setExtras]=useState({
        ago:'',
        minRead:''
    })

    const [imageUrl,setImageUrl]=useState()




    const refContainer=useRef()
    
    useEffect(()=>{
       
        const diff=['seconds','minutes','hours','days','months','years']
        const limits=[60,60,24,30,12,100]
        const i=0
        const result=0
        const ago=''
        while(i<diff.length){
            result=moment().diff(data.createdAt,diff[i])
            if(result<limits[i]){
                ago=`${result} ${diff[i]} ago`;
                break;
            }
            i=i+1
        }
        const minRead=Math.ceil(data.content.split(' ').length/275);
      
        setExtras({
            ...extras,minRead,ago
        })



    },[])


    useEffect(()=>{

        refContainer.current.innerHTML=data.richText

        const id=Math.ceil(Math.random()*1000)
        setImageUrl(refContainer.current.getElementsByTagName('img')[0]?.getAttribute('src')||`https://picsum.photos/id/${id}/300/300`)



    },[])


 
    

    return <div className="flex w-full px-5 py-8  space-y-2   border-gray-300 border-t font-[300] ">
    

    <div className="flex flex-col space-y-2 items-start">

    <div className="flex space-x-3 justify-start items-center space-y-0  ">
    {data.author.photo?<img src={data.author.photo} className="rounded-full w-[24px] h-[24px]"/>:<AccountCircleIcon style={{fontSize:'2rem'}}/>}
    <p className="text-sm text-secondary">{data.author.name}</p>
    <p className="text-sm text-quarternary">{extras.ago}</p>
    </div>


    <div className="flex flex-col justify-start space-y-1 mr-6">
    



    <Link href={`/articles/${data.id}`}>
    <h1 className="text-primary text-xl font-[600] cursor-pointer">{data.title}</h1>

    </Link>



    </div>


    <div className="flex text-xs  text-tertiary justify-between items-start py-2">
        <div className="flex space-x-3 items-center">
        <p className="bg-[#F2F2F2] px-2 py-1 rounded-2xl cursor-pointer">{data.topic}</p>
        <p>{data.minRead}{extras.minRead} min read</p>
        <p>Selected for you</p>

        </div>

{deleteOption&&<button onClick={()=>{handleDelete(data.id)}}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M3 6H5H21" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11V17" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>

}


        



        
    
        </div>

    </div>



    <div ref={refContainer} className="hidden"></div>


    </div>


}

