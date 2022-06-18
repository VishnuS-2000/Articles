import Image from "next/image"
import moment from "moment"
import { useEffect, useState } from 'react';
import Link from "next/link";



//Article Card Component

export const ArticleCard=({data})=>{
    
    const [extras,setExtras]=useState({
        ago:'',
        minRead:''
    })

    
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
    

    return <div className="flex  px-2 py-8 max-w-[720px] space-y-2  border-line border-t font-[300] ">
    

    <div className="flex flex-col space-y-2 ">
    <div className="flex space-x-3 justify-start item-center space-y-0 ">
    <img src="https://static.independent.co.uk/2022/04/26/16/054348ef248cdd6196d71ae7a049b305Y29udGVudHNlYXJjaGFwaSwxNjUxMDcxMzkz-2.66390146.jpg?quality=75&width=982&height=726&auto=webp" className="rounded-full w-[24px] h-[24px]"/>
    <p className="text-sm text-secondary">{data.author.name}</p>
    <p className="text-sm text-quarternary">{extras.ago}</p>
    </div>

    <div className="flex flex-col justify-start space-y-1 mr-6">
    
    <Link href={`/articles/${data.id}`}>
    <h1 className="text-primary text-2xl font-[400] cursor-pointer">{data.title}</h1>
    </Link>
    <p className="text-secondary font-[300]">{data.content.slice(0,240)}...</p>


    </div>


    <div className="flex text-sm  text-tertiary justify-between items-start py-2">
        <div className="flex space-x-3 items-center">
        <p className="bg-[#F2F2F2] px-2 py-1 rounded-2xl cursor-pointer">{data.topic}</p>
        <p>{data.minRead}{extras.minRead} min read</p>
        <p>Selected for you</p>

        </div>

        <button className="mr-5 mt-1"><img src="./assets/card/icon.svg"/></button>
    </div>

    </div>

    <div className="drop-shadow-sm abolute min-w-[150px]">
    <Image src="http://picsum.photos/300/300" height="150px" width="150px" className="float-right cursor-pointer" alt="article-image" />
    </div>
    



    </div>


}

