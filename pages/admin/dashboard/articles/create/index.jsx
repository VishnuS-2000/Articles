import { SideBar } from '../../../../../components/sideBar'

import dynamic from 'next/dynamic'
import {useState,useEffect} from 'react'
import { getSession } from 'next-auth/react'

import axios from 'axios'

import {Alert,AlertIcon,AlertTitle,AlertDescription,Switch} from '@chakra-ui/react'


import {useSession} from 'next-auth/react'
import Link from 'next/link'
import {useRouter} from 'next/router'


import {Notification} from '../../../../../components/notification'



const RichTextEditor= dynamic(() => import('@mantine/rte'), { ssr: false });


const ArticleCreate=({authors,topics}) => {

    const router=useRouter()

    const {data:session}=useSession()
    const [article,setArticle]=useState({
        title:'',
        authorId:'',
        topic:'',
        content:'',
    })
    const [text,setText]=useState()

    const [notification,setNotification]=useState({
        message:null
    })

    const [newTopic,setNewTopic]=useState(false)
  
    const handleSubmit=async(e)=>{
        e.preventDefault()

        try{
        
        let content=text.replace(/<[^>]+>/g,'')
        content=content.replace(/<p>\s*&nbsp;\s*(\s*&nbsp;\s*)+<\/p>/ig,'')
    
        
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/articles`,{
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
        
        setNotification({status:'success',message:'Article Created',float:true})
        router.push('/admin/dashboard/articles/?page=1')

        }

        catch(err){

            setNotification({status:'error',message:err.message})            
        }


    }


    return (
        <div className='flex w-full h-screen font-poppins'>
            <SideBar/>
            <form  onSubmit={handleSubmit} className=' p-5 flex flex-col justify-start  align-top w-[75%] h-full font-poppins'>
                <div className='flex flex-row-reverse gap-5 mr-5 items-center'>
                    
                {notification.message&&<Notification options={notification}/>}
                    
                    <Link href='/admin/dashboard/articles/?page=1'>
                    <button type='button' className='' href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H5H21" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    </Link>

                    
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
                            return <option value={element.id}>{element.name} - {element.email}</option>
                        })}  


                    </select>
                </div>

                <div className="flex px-5 py-2 space-x-3 items-center">
                    <label className="w-36  text-[#757575] font-[400] text-2xl text-gray-[#757575] bg-tra pr-5 border-r border-gray-300">Topic</label>
                    
                    {newTopic?
                    <input placeholder='Enter a Topic' value={article.topic} className='w-full px-3 py-2 text-xl focus:outline-none  placeholder-gray-600 font-[400] text-secondary' required onChange={(e)=>{setArticle({...article,topic:e.target.value})}}/>:
                    <select required={true} name="author_select" className="w-full px-3 py-2 text-xl focus:outline-none text-gray-600 appearance-none bg-white" onChange={(e)=>{setArticle({...article,topic:e.target.value})}}>
                        <option className='text-gray-600' value="">Select a Topic</option>
                     {topics.map((element)=>{
                         return <option value={element} className='text-gray-600'>{element}</option>
                     })}
                    </select>}
                    <p className=''>New</p>
                    <Switch size='md' onChange={()=>{setNewTopic(!newTopic)}}/>
                    
                </div>
                
                
                
                
                


                <RichTextEditor value={text} onChange={setText} className='w-full h-[90%] overflow-y-auto text-2xl border border-2 border-black'/>
     
                
               
            </form>

             
         
        </div>
    );
}


export async function getServerSideProps(context){

    const session=await getSession(context)

  

    if(!session){
  
      return{
  
          redirect:{
              destination:'/login',
              permanent:false
          }
  
      }
  
  
    }


    try{
        const uniqueTopics=[]
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
                topics:uniqueTopics
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

export default ArticleCreate




