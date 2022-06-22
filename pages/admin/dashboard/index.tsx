import type {NextPage} from 'next'
import { useRef , useEffect } from 'react';
import {RadialChart} from 'react-vis';




import {SideBar} from '../../../components/sideBar'
import { useSession,getSession } from "next-auth/react";

import axios from 'axios';




const Home:NextPage=()=>{
    

    
    const myData = [ {angle: 1 }, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation'}, {angle: 5, label: 'Alt Label'}, {angle: 3}, {angle: 5,  subLabel: 'Sub Label only', className: 'custom-class'} ]



    const {data:session}=useSession()
   
        
    
            return (
                
                <div className='flex w-full min-h-screen font-poppins'>
                
        
                <SideBar active='home'/>

                
                <div className='flex flex-col w-full p-5'>
                    <h1 className='text-2xl text-[#4C4C4C] font-[400]'>Dashboard</h1>
                    <h1 className='pt-2 text-2xl text-[#4C4C4C] font-[500]'>General Statistics</h1>

                    <div className='flex flex-row space-x-20 p-10'>
                    <div className='bg-[#f2f2f2] shadow-lg shadow-gray-400 flex flex-col rounded-[10px] h-[100px] w-[180px] justify-center items-center'>
                        <h1 className='text-[32px] font-[500] text-[#4C4C4C]'>2000</h1>
                        <p className='text-[16px] font-[500] text-[#4C4C4C]'>Total Articles</p>
                    </div>
                    
                    
                    <div className='bg-[#f2f2f2] shadow-lg shadow-gray-400 flex flex-col rounded-[10px] h-[100px] w-[180px] justify-center items-center'>
                        <h1 className='text-[32px] font-[500] text-[#4C4C4C]'>2000</h1>
                        <p className='text-[16px] font-[500] text-[#4C4C4C]'>Total Authors</p>
                    </div>
                    
                    
                    <div className='bg-[#f2f2f2] shadow-lg shadow-gray-400 flex flex-col rounded-[10px] h-[100px] w-[180px] justify-center items-center'>
                        <h1 className='text-[32px] font-[500] text-[#4C4C4C]'>2000</h1>
                        <p className='text-[16px] font-[500] text-[#4C4C4C]'>Total Topics</p>
                    
                    </div>
                    
                    </div>

                    <div className='flex justify-between pt-6 w-3/4'>
                        <div className='flex w-full h-full border-r'>
                        
                        <RadialChart
                        data={myData}
                        width={300}
                        height={300} />

                        <h1 className='text-[14px] font-[500]'>Authors based on topic</h1>
                        
                        </div>
                        
                        
                        <div className=' flex w-full h-full'>
                        <RadialChart
                        data={myData}
                        width={300}
                        height={300}
                        />

                        <h1 className='text-[14px] font-[500]'>Articles based on topic </h1>

                        </div>

                    </div>


                </div>
                
                
                

                



                </div>

              )

}



export default Home;