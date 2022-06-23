import type { NextPage } from "next";
import { SideBar } from '../../../../components/sideBar';
import { DisplayTable } from '../../../../components/table';
import axios from 'axios'
import {useRouter} from 'next/router'
import { getSession } from "next-auth/react";

const ArticleDashBoard:NextPage=({data,err})=>{

    console.log(data,err)

    const router=useRouter()

    return <div className='flex w-full min-h-screen font-poppins '>
                
    

     <SideBar active='articles'/>
     <DisplayTable data={data.result.rows} count={data.result.count} page={(router.query.page)} navigationURL='/admin/dashboard/articles/' limit={15}/>


    </div>



}

export default ArticleDashBoard;



export async function getServerSideProps({query , context}){

    const session=await getSession(context)

  

    if(!session){
  
      return{
  
          redirect:{
              destination:'/login',
              permanent:false
          }
  
      }
  
  
    }

    const offset=(query.page-1)*15

    const url=query.term?`http://localhost:4000/admin/search/`:'http://localhost:4000/articles'

    try{
    const response=await axios.get(url,{
        headers:{
            offset:offset,
            limit:15,
            article:true
        },
        params:query
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
            data:{},
            err:err.message,
            url:url
        }
    }
}

}