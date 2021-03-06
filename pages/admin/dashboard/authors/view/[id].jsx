import { SideBar } from '../../../../../components/sideBar'
import Link from 'next/link'
import { SearchBar } from '../../../../../components/searchBar'
import { useState,useEffect } from 'react'
import axios from 'axios'

import {ArticleCard} from '../../../../../components/articleCard'
import {ViewContainer} from '../../../../../components/container'

import { Notification } from '../../../../../components/notification';

import {useRouter} from 'next/router'

import {useSession} from 'next-auth/react'
import moment from 'moment'


// UI by Sharun
const AuthorView=({data}) => {


    const router=useRouter()

    const {data:session}=useSession()





    useEffect(()=>{

        if(!session){
            router.push('/login')
        }

    },[])


    const [isArticle, setIsArticle] = useState(true);
    const [notification,setNotification]=useState({});



    const handleDelete=async()=>{
        
        try{
            const response=await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/author/${data.result.id}`,{
            headers:{
                'Authorization':`Bearer ${session.accessToken}`
            }

            })
            setNotification({status:'warning',message:'Successfully Deleted',createdAt:moment()})
            router.push('/admin/dashboard/authors/?page=1')
        }
        catch(err){
            setNotification({status:'error',message:err.message,createdAt:moment()})
        }


    }



    // console.log(data)
    
    return <div className='w-full min-h-screen flex font-poppins'>
        <SideBar />

    
        
        {/* Middle container */}
        <div className='flex flex-col w-full relative px-20 justify-center '>

        {notification.message&&<Notification options={notification}/>}
            {/* Topbar */}
            <div className='flex  items-center justify-between m-8'>
                <div className='flex gap-8'>
                    <Link href='/admin/dashboard/authors/?page=1'>
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
                            <svg width="24" className='stroke-primary' height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    {/* Delete button */}

                    <button type='button' className='stroke-primary' onClick={()=>{handleDelete()}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H5H21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
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
                    <Link href={`/admin/dashboard/articles/create`}>
                    <button className='px-5 bg-[#394867] text-white rounded-[15px] w-[150px] py-2 shadow-sm text-base'>
                        ADD NEW +
                    </button>
                    </Link>
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



export async function getServerSideProps({query , context}){
   

    try{

    const response=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/authors/${query.id}`)

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