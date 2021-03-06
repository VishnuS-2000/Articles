import { getSession } from 'next-auth/react'

import { SideBar } from '../../../../../components/sideBar'

import dynamic from 'next/dynamic'
import {useState,useEffect} from 'react'


import axios from 'axios'

import {Alert,AlertIcon,AlertTitle,AlertDescription,Switch} from '@chakra-ui/react'


import {useSession} from 'next-auth/react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Notification} from '../../../../../components/notification'

import moment from 'moment'



const RichTextEditor= dynamic(() => import('@mantine/rte'), { ssr: false });


const ArticleEdit=({authors,topics,data}) => {




    const router=useRouter()

    const {data:session}=useSession()



    useEffect(()=>{

        if(!session){
            router.push('/login')
        }

    },[])








    const [article,setArticle]=useState({
        id:data.result.id,
        title:data.result.title,
        authorId:data.result.authorId,
        topic:data.result.topic,
        content:data.result.content
    })
    const [text,setText]=useState(data.result.richText)

    const [notification,setNotification]=useState({
        message:null
    })

    const [newTopic,setNewTopic]=useState(false)
  
    const handleSubmit=async(e)=>{
        e.preventDefault()

        try{
        
        const content=text.replace(/<[^>]+>/g,'')


        if(content.length<250){
            setNotification({'status':'error','message':'content cannot be less than 250 characters',createdAt:moment()})

            return 
        }    

        
        await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/article/${data.result.id}`,{
            title:article.title,
            topic:article.topic,
            authorId:article.authorId,
            content:content,
            richText:text
        },{

            headers:{
                'Authorization':`Bearer ${session.accessToken}`
            }
        })

        setNotification({status:'success',message:'Article Edited',createdAt:moment()})
        router.push('/admin/dashboard/articles/?page=1')

        }

        catch(err){

            setNotification({status:'error',message:err.message,createdAt:moment()})            
        }


    }



    const handleDelete=async()=>{
        alert('clicked')

        try{
        const response=await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/article/${article.id}`,{
            headers:{
                'Authorization':`Bearer ${session.accessToken}`
            }
        })

        setNotification({status:'warning',message:'Article Deleted',float:true})

        router.push(`/admin/dashboard/articles/?page=1`)
        }

        catch(err){
            // console.log(err)
            setNotification({status:'error',message:err.message,createdAt:moment()})
        }   


    }



    const handleNewTopic=(e)=>{


        setArticle({...article,topic:e.target.value})

        topics.map((element)=>{
            if(element.toLowerCase()===(e.target.value).toLowerCase()){
 
                setNotification({status:'error',message:'Topic already exists',createdAt:moment()})
            }
        })
        
          
        


    }




    return (
        <div className='flex w-full h-screen '>
            <SideBar/>
            
            <div className='flex flex-col w-full'>
            {notification.message&&<Notification options={notification}/>}   
            <form  onSubmit={handleSubmit} className='p-5 flex flex-col justify-start  align-top w-[75%] h-full font-poppins'>
     
            <div className='flex flex-row-reverse gap-5 mr-5 items-center'>
                    
       
    


             


                    
                    <button type='submit' className='bg-[#394867] text-white px-8 py-1 rounded-full'>Publish</button>
              
                       
              
              
              
              
              
                </div>


                <div className="flex px-5 py-2 space-x-3 items-center ">
                    <label className="w-36  text-[#757575] font-[400] pr-5 border-r text-2xl border-gray-300">Title</label>
                    <input required={true} className="w-full px-3 py-2 text-2xl focus:outline-none  placeholder-gray-500 font-[300] text-secondary" type="text" placeholder='Main Title' value={article.title} onChange={(e)=>{setArticle({...article,title:e.target.value})}}/>
                </div>

                <div className="flex px-5 py-2 space-x-3 ">
                    <label className="w-36  text-[#757575] font-[400] text-2xl text-gray-[#757575] bg-tra pr-5 border-r border-gray-300 ">Author</label>
                    <select required={true} name="author_select" className="w-full px-3 py-2 text-xl focus:outline-none text-gray-600 appearance-none bg-white" onChange={(e)=>{setArticle({...article,authorId:e.target.value})}}>
                        <option  className='text-gray-600' value="">Select an Author</option>

                        {authors.result.rows.map((element)=>{
                            return <option value={element.id} selected={element.id===article.authorId}>{element.name} - {element.email}</option>
                        })}  


                    </select>
                </div>

                <div className="flex px-5 py-2 space-x-3 items-center">
                    <label className="w-36  text-[#757575] font-[400] text-2xl text-gray-[#757575] bg-tra pr-5 border-r border-gray-300">Topic</label>
                    
                    {newTopic?
                    <input placeholder='Enter a Topic' value={article.topic} className='w-full px-3 py-2 text-xl focus:outline-none  placeholder-gray-600 font-[400] text-secondary' required onChange={handleNewTopic}/>:
                    <select required={true} name="author_select" className="w-full px-3 py-2 text-xl focus:outline-none text-gray-600 appearance-none bg-white" onChange={(e)=>{setArticle({...article,topic:e.target.value})}} >
                        <option className='text-gray-600' value="">Select a Topic</option>
                     {topics.map((element)=>{
                         return <option value={element} className='text-gray-600' selected={element===article.topic&&true}>{element}</option>
                     })}
                    </select>}
                    <p className=''>New</p>
                    <Switch size='md' onChange={()=>{setNewTopic(!newTopic)}}/>
                    
                </div>
                
                
                
                
                


                <RichTextEditor value={text} onChange={setText} className='w-full h-[90%] overflow-y-auto text-2xl border border-2 border-black'/>
     
                
               
                </form>
                     
                </div>

                <button type='button' className='absolute top-6 right-5' onClick={()=>{handleDelete()}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H5H21" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

             
         
        </div>
    );
}


export async function getServerSideProps({query , context}){



    try{
        const uniqueTopics=[]

        const requiredArticle=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${query.id}`)
        const authorResponse=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/authors`)
        const articleResponse=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`)

        articleResponse.data.result.rows.map((e)=>{
            if(!uniqueTopics.includes(e.topic)){
                uniqueTopics.push(e.topic)
            }
        })
        

        return {   
            props:{
                authors:authorResponse.data,
                topics:uniqueTopics.sort(),
                data:requiredArticle.data
            }
        }

    }
    catch(err){

        return {
            props:{
                data:{}
            }
        }
    }




}

export default ArticleEdit




