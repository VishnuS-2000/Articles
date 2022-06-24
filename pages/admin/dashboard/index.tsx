import type {NextPage} from 'next'
import { useRef , useEffect, useState } from 'react';
import {RadialChart} from 'react-vis';




import {SideBar} from '../../../components/sideBar'
import { useSession,getSession } from "next-auth/react";

import axios from 'axios';




const Home:NextPage=({authors , articles , topics , topicwise})=>{
    

    
    
    
    // const data=[]

    const myData = [{angle: 1 ,color :1}, {angle: 5 , colo :2}, {angle: 2 , color :3}]

    // const {data:session}=useSession()


    // console.log(authors.result.rows.length);
    
    
   
        
    
            return (
                
                <div className='flex w-full min-h-screen font-poppins'>
                
        
                <SideBar active='home'/>

                
                <div className='flex flex-col w-full p-5'>
                    <h1 className='text-2xl text-[#4C4C4C] font-[400]'>Dashboard</h1>
                    <h1 className='pt-2 text-2xl text-[#4C4C4C] font-[500]'>General Statistics</h1>

                    <div className='flex flex-row space-x-20 p-10'>
                    <div className='bg-[#f2f2f2] shadow-lg shadow-gray-400 flex flex-col rounded-[10px] h-[100px] w-[180px] justify-center items-center'>
                        <h1 className='text-[32px] font-[500] text-[#4C4C4C]'>{articles.result.count}</h1>
                        <p className='text-[16px] font-[500] text-[#4C4C4C]'>Total Articles</p>
                    </div>
                    
                    
                    <div className='bg-[#f2f2f2] shadow-lg shadow-gray-400 flex flex-col rounded-[10px] h-[100px] w-[180px] justify-center items-center'>
                        <h1 className='text-[32px] font-[500] text-[#4C4C4C]'>{authors.result.rows.length}</h1>
                        
                        <p className='text-[16px] font-[500] text-[#4C4C4C]'>Total Authors</p>
                    </div>
                    
                    
                    <div className='bg-[#f2f2f2] shadow-lg shadow-gray-400 flex flex-col rounded-[10px] h-[100px] w-[180px] justify-center items-center'>
                        <h1 className='text-[32px] font-[500] text-[#4C4C4C]'>{topics.length}</h1>
                        <p className='text-[16px] font-[500] text-[#4C4C4C]'>Total Topics</p>
                    
                    </div>
                    
                    </div>

                    <div className='flex justify-between pt-6 w-3/4'>
                        
                        
                        
                        <div className=' flex flex-col w-full h-full'>
                        <h1 className='text-[20px] font-[500]'>Articles based on topic </h1>
                        <RadialChart
                        data={topicwise}
                        width={300}
                        height={300}
                        showLabels = {true}
                        />

                        

                        </div>

                    </div>


                </div>
                
                
                

                



                </div>

              )

}

export async function getServerSideProps(context) {


  const session=await getSession(context)

  

  if(!session){

    return{

        redirect:{
            destination:'/login',
            permanent:false
        }

    }


  }





    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`)
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/authors`)

        const uniqueTopics = []
        const topicWise =[]

        


        response.data.result.rows.map((e)=>{

            if(!uniqueTopics.includes(e.topic)){
                uniqueTopics.push(e.topic)
                topicWise.push({angle:1,label : e.topic})
            }

            else{
                const index = uniqueTopics.indexOf(e.topic)
                
                
                topicWise[index].angle=topicWise[index].angle+1
            }
        })

        return {props:{ 
                articles : response.data,
                authors : res.data
                ,topics : uniqueTopics,
                topicwise : topicWise
            }}
        
    }
    catch(err){
        // console.log(err);
        
        return({
            props : {
                data : {}
               }   }
        )

    }
    
}

export default Home;