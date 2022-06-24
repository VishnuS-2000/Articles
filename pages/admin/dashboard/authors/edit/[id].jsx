import Image from 'next/image'
import {useState,useEffect} from 'react'

import { SideBar } from '../../../../../components/sideBar'
import Link from 'next/link'

import {useSession} from 'next-auth/react'

import axios from 'axios'
import {Notification} from '../../../../../components/notification'
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react'


const AuthorEdit=({data})=>{


    const {data:session}=useSession()


    const router=useRouter()





    useEffect(()=>{

        if(!session){
            router.push('/login')
        }

    },[])





    const [author,setAuthor]=useState({
        name:data.result.name,
        email:data.result.email,
        bio:data.result.bio,
        specialization:data.result.specialization

    })

    const[notification,setNotification]=useState({})
    const[image,setImage]=useState({url:data.result.photo})
    
    const [previous,setPrevious]=useState({
        name:null,
        email:null,
        bio:null,
        specialization:null
    })
    
    const[edit,setEdit]=useState({
        name:false,
        email:false,
        bio:false,
        specialization:false
    })




  

    const handleChange=({target})=>{
        if(target.files.length){
            const raw=target.files[0]
            const url=URL.createObjectURL(target.files[0])
            
            setImage({
                raw:raw,
                url:url
            })
            // console.log(url)
        }


    }

 

    const uploadImage=async()=>{
        
            try{
    
                const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/upload`,{file:image.raw},{
                    headers:{
                        "Content-Type": "multipart/form-data",
                        "Authorization":'Bearer '+session.accessToken
                    }
                })
    
                return {url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${response.data.filename}`}            
                }
    
                catch(err){
                    
                    SetNotification({message:err.response.data.message})
                }
    
        
    
    }



    const handleSubmit=async(e)=>{
     
        e.preventDefault()

        // console.log(author)
        try{
        var imageURL={}
        
        if(image.raw){
        imageURL=await uploadImage()
        // console.log(imageURL)

        }

        // console.log(imageURL.url)

        await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/author/${data.result.id}`,{
            name:author.name,
            bio:author.bio,
            email:author.email,
            photo:imageURL?.url,
            specialization:author.specialization


        },{
            headers:{
                'Authorization':`Bearer ${session.accessToken}`
            }

        })  

        setNotification({message:'Updated Author',status:'success',float:true})
        router.push('/admin/dashboard/authors/?page=1')

        }catch(err){
            
            // console.log(err)
            setNotification({message:err.message,status:'error'})

        }
        
    }







return <div className='flex min-h-screen'>
            <SideBar/>



    <div className='flex flex-col items-center  flex-[0.60]   p-10  space-y-5'>
        

        <div className='flex space-x-3 justify-between  w-[650px]  '>
        
        
                    <div className='flex items-center space-x-3'>

                        <Link href='/admin/dashboard/authors/?page=1'>  
                            <button>        
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 19L5 12L12 5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                            </button>
                        </Link>

            <h1 className='text-2xl text-primary font-[400]'>Edit Author</h1>
                    </div>

    

        
        </div>






        <div className='w-full'>
                {notification.message&&<Notification options={notification}/>}
        </div>
  
        <form onSubmit={handleSubmit}>

        <div className='flex flex-col space-y-1 w-[650px] my-4 ' >
        <p className='text-[#575767]  font-[600]'>AUTHOR NAME</p>
        
        <div className='flex items-center  '>
        <input type='text' value={author.name} className='outline-none w-[80%] border-b border-slate-300 py-5  text-xl' placeholder='Robert Langdon'   onChange={(e)=>{setAuthor({...author,name:e.target.value})}} required={true} disabled={edit.name?false:true}/>
        {!edit.name&&<button className='text-lg rounded-[15px] border w-[120px] h-[40px] border-[#757575] outline-none' onClick={()=>{setEdit({...edit,name:true}); setPrevious({...previous,name:author.name})}}>Edit</button>}
        
        {edit.name&&
        <div className='flex space-x-3'>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,name:false});}}>Save</button>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,name:false}); setAuthor({...author,name:previous.name})}}>Cancel</button>
        </div>
        }
        
    
        </div>
        </div>



        <div className='flex flex-col space-y-1 w-[650px] my-4' >
        <p className='text-[#575767]  font-[600]'>BIO</p>
        

        <div className='flex items-center  '>
        <input type='text' value={author.bio} className='w-[80%] outline-none border-b border-slate-300 py-5  text-xl' placeholder='Professor,Department of Mathematics'   onChange={(e)=>{setAuthor({...author,bio:e.target.value})}} required={true} disabled={edit.bio?false:true}/>
        

        {!edit.bio&&<button className='text-lg rounded-[15px] border w-[120px] h-[40px] border-[#757575] outline-none' onClick={()=>{setEdit({...edit,bio:true}); setPrevious({...previous,bio:author.bio})}}>Edit</button>}
        
        {edit.bio&&
        <div className='flex space-x-3'>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,bio:false});}}>Save</button>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,bio:false}); setAuthor({...author,bio:previous.bio})}}>Cancel</button>
        </div>
        }

        </div>

        </div>

        



        <div className='flex flex-col space-y-1 w-[650px] my-4' >
        <p className='text-[#575767]  font-[600]'>EMAIL</p>
        
        <div className='flex items-center  '>
        <input type='email' value={author.email} className='w-[80%] outline-none border-b border-slate-300 py-5  text-xl' placeholder='robertlangdon@gmail.com'   onChange={(e)=>{setAuthor({...author,email:e.target.value})}} required={true} disabled={edit.email?false:true}/>
        

        {!edit.email&&<button className='text-lg rounded-[15px] border w-[120px] h-[40px] border-[#757575] outline-none' onClick={()=>{setEdit({...edit,email:true}); setPrevious({...previous,email:author.email})}}>Edit</button>}
        
        {edit.email&&
        <div className='flex space-x-3'>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,email:false});}}>Save</button>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,email:false}); setAuthor({...author,email:previous.email})}}>Cancel</button>
        </div>
        }

        </div>

        </div>


        <div className='flex flex-col space-y-1 w-[650px] my-4' >
        <p className='text-[#575767]  font-[600]'>SPECIALIZATION</p>
        <div className='flex items-center'>
        <input type='text' value={author.specialization} className='w-[80%] outline-none border-b border-slate-300 py-5  text-xl' placeholder='Mathematics Science Etc'   onChange={(e)=>{setAuthor({...author,specialization:e.target.value})}} required={true} disabled={edit.specialization?false:true}/>

        {!edit.specialization&&<button className='text-lg rounded-[15px] border w-[120px] h-[40px] border-[#757575] outline-none' onClick={()=>{setEdit({...edit,specialization:true}); setPrevious({...previous,specialization:author.specialization})}}>Edit</button>}
        
        {edit.specialization&&
        <div className='flex space-x-3'>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,specialization:false});}}>Save</button>
        <button className='text-lg rounded-[15px] border border-[#757575] w-[120px] h-[40px]' onClick={()=>{setEdit({...edit,specialization:false}); setAuthor({...author,specialization:previous.specialization})}}>Cancel</button>
        </div>
        }
    
    </div>

        </div>

        <input id='upload-button' type='file' placeholder='upload' className='hidden' onChange={handleChange} />








    <div className='flex flex-row-reverse justify-between items-center my-4 w-[650px]'>
        <label htmlFor='upload-button'>
            




        <div className='relative '>

            
            {image.url?
    <Image src={image.url}  height='120' width='120' className='rounded-full'/>:
    <Image src='https://picsum.photos/120/120' height='120' width='120' className='rounded-full'/>


    }

<div className='bg-white opacity-20 rounded-full absolute w-[120px] top-0 h-[120px] flex items-center justify-center'>


    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.0837 36.4167C44.0837 37.4333 43.6798 38.4084 42.9609 39.1272C42.242 39.8461 41.267 40.25 40.2503 40.25H5.75033C4.73366 40.25 3.75864 39.8461 3.03975 39.1272C2.32086 38.4084 1.91699 37.4333 1.91699 36.4167V15.3333C1.91699 14.3167 2.32086 13.3416 3.03975 12.6228C3.75864 11.9039 4.73366 11.5 5.75033 11.5H13.417L17.2503 5.75H28.7503L32.5837 11.5H40.2503C41.267 11.5 42.242 11.9039 42.9609 12.6228C43.6798 13.3416 44.0837 14.3167 44.0837 15.3333V36.4167Z" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.9997 32.5833C27.2339 32.5833 30.6663 29.1508 30.6663 24.9167C30.6663 20.6825 27.2339 17.25 22.9997 17.25C18.7655 17.25 15.333 20.6825 15.333 24.9167C15.333 29.1508 18.7655 32.5833 22.9997 32.5833Z" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>



</div>

</div>
 

  




        </label>

        
         <div className='flex flex-col'>
      <p className='text-[#575767]  font-[600]'>AUTHOR PHOTO</p>
      <p className='text-lg text-[#606267]'>Recommended Size Square atleast 100px PNG or JPG</p>

      </div>
    
    </div>

    <button type='submit'  className='bg-[#394867] text-white px-8 py-1 rounded-full'>Save</button>
</form>






    </div>

</div>

}

export async function getServerSideProps({query}){

  

    try{

        const response=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/authors/${query.id}`)
        
        return {
            props:{
                data:response.data
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



export default AuthorEdit