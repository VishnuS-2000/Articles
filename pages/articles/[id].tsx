import moment from "moment";
import type { NextPage } from "next";
import axios from 'axios'
import Article from "../../components/article";
import { SearchBar } from "../../components/searchBar";

import { AuthorCard } from "../../components/authorCard";

import { useState,useEffect } from "react";
import {AuthorDetail} from '../../components/authorDetailCard'
import {MoreContainer} from '../../components/container'




const ArticlePage:NextPage=({data})=>{

    
    const [extras,setExtras]=useState({})


    useEffect(()=>{

        const date=moment(data.result.createdAt).format('LL')   
        const minRead=`${Math.ceil(data.result.content.split(' ').length/275)} min read`;
        
        setExtras({
            date,minRead
        })


    },[])


return <div className='flex min-h-screen items-start  pb-10 '>

        <div className="flex-[1] desktop:flex-[0.75]   flex   justify-center w-full  ">
        
  
        <div className=" px-5 desktop:px-8  flex flex-col">
                <AuthorCard name={data.result.author.name} photo={data.result.author.photo} extras={extras}/>
                <Article article={data.result}/>
                   <MoreContainer name={data.result.author.name} id={data.result.id}/>

        </div>

        <div>
     
            <AuthorDetail author={data.result.author}/>
        </div>
    </div>

      






    </div>




}

export async function getServerSideProps({params}){


try{
    const response=await axios.get(`http://localhost:4000/articles/${params.id}`)

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
