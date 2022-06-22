import type { NextPage } from 'next'
import { SideBar } from '../../../../../components/sideBar'
import Link from 'next/link'
import { SearchBar } from '../../../../../components/searchBar'
import { useState } from 'react'
import axios from 'axios'

import {ArticleCard} from '../../../../../components/articleCard'
import {ViewContainer} from '../../../../../components/container'

import { Notification } from '../../../../../components/notification';

import {useRouter} from 'next/router'

import {useSession} from 'next-auth/react'

// UI by Sharun
const AuthorView: NextPage = ({data}) => {



    const [isArticle, setIsArticle] = useState(true);
    const [notification,setNotification]=useState({});

    const {data:session}=useSession()
    const router=useRouter()
    const handleDelete=async()=>{
        
        try{
            const response=await axios.delete(`http://localhost:4000/admin/author/${data.result.id}`,{
            headers:{
                'Authorization':`Bearer ${session.accessToken}`
            }

            })
            setNotification({status:'success',message:'Successfully Deleted',float:true})
            router.push('/admin/dashboard/authors/1')
        }
        catch(err){
            setNotification({status:'error',message:err.message,float:true})
        }


    }



    console.log(data)
    
    return <div className='w-full min-h-screen flex font-poppins'>
        <SideBar />

        {notification.message&&<Notification options={notification}/>}
        
        {/* Middle container */}
        <div className='flex flex-col w-full relative px-20 justify-center '>
            {/* Topbar */}
            <div className='flex  items-center justify-between m-8'>
                <div className='flex gap-8'>
                    <Link href='#'>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    <h1 className='text-3xl text-[#757575] font-[400]'>{data.result.name}</h1>
                
                   {/* Edit button */}
                   <Link href={`/admin/dashboard/authors/edit/${data.result.id}`}>
                        <button>
                            <svg width="24" className='stroke-[#757575]' height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    {/* Delete button */}
                    <button className=' bg-[#394867] text-white rounded-[15px] w-[150px]  shadow-sm text-base' onClick={()=>{handleDelete()}}>
                       Delete
                    </button>
                
                
                 </div>
           
            </div>
            {/* Group tabs */}
            <div className='flex justify-between m-8'>
                <div className='flex gap-8'>
                    <button id='articleTab' className='text-xl text-[#B2B7BA] py-2 px-4 border border-x-0 border-t-0 hover:border-b-gray-700 focus:border-b-gray-700' onClick={() => { setIsArticle(true) }}>
                        Articles
                    </button>
                    <button id='aboutTab' className='text-xl text-[#B2B7BA] py-2 px-4 border border-x-0 border-t-0 hover:border-b-gray-700 focus:border-b-gray-700' onClick={() => { setIsArticle(false) }}>
                        About
                    </button>
                </div>
            </div>
            {/* End of middle container */}

            {/* Content */}
            {
                isArticle ? <div className='flex-1'>
                    <div className='flex flex-col items-start gap-5 px-10 py-5 '>
                    <button className='px-5 bg-[#394867] text-white rounded-[15px] w-[150px] py-2 shadow-sm text-base'>
                        ADD NEW +
                    </button>
                        {/* TODO: Article card list display */}

                    <ViewContainer data={data}/>


                    </div>
                </div> : <div className='flex-1'>
                    <div className='flex flex-col px-10 py-5'>
                        <h1 className='text-2xl text-primary font-[500] mb-4 border border-x-0 border-t-0'>Biography</h1>
                        <p className='text-xl text-[#757575] font-[400] mb-10 mt-4'>
                           {data.result.bio}
                        </p>
                        <h1 className='text-2xl text-primary font-[500] mb-4 border border-x-0 border-t-0'>Areas of Specialization</h1>
                        <div className='flex gap-5'>
                          <h1 className='text-xl text-[#757575] mt-4'>{data.result.specialization}</h1>
                        </div>
                    </div>
                </div>
            }
        </div>

        {/* Right sidebar */}
     

    </div>




}



export async function getServerSideProps({query}){

    try{

    const response=await axios.get(`http://localhost:4000/authors/${query.id}`)

    return {props:{
        data:response.data
    }}

}
catch(err){
    return {props:{
        data:{       
        }
    }}
}


}


export default AuthorView