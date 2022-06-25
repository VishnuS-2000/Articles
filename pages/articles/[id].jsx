import moment from "moment";

import axios from 'axios'
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


    useEffect(()=>{

        const date=moment(data.result.createdAt).format('LL')   
        const minRead=`${Math.ceil(data.result.content.split(' ').length/275)} min read`;
        
        setExtras({
            date,minRead
        })


    },[])


return  <div className='flex min-h-screen items-start justify-center   w-full   '>

<Footer/>

<LogoCard/>
<div className="flex-[1] tablet:flex-[0.90]  desktop:flex-[0.70] justify-center w-full  ">


<div className=" px-6 py-12 tablet:px-10 desktop:px-12  flex flex-col w-full ">

<LogoCardMobile/>
        <AuthorCard name={data.result.author.name} photo={data.result.author.photo} extras={extras}/>
        <Article article={data.result}/>
        <MoreContainer name={data.result.author.name} id={data.result.id}/>
        

</div>

<div>

</div>


<div className="hidden desktop:flex  ">

</div>

</div>



<AuthorDetail author={data.result.author}/>


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
