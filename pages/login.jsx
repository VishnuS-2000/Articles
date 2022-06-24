
import {useState,useEffect} from "react"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';

import {useSession} from 'next-auth/react'
import {Notification} from '../components/notification'

import axios from 'axios'

const AuthPage=()=>{

const [admin,setAdmin]=useState({
    username:'',password:'',
    email:'',code:''
})

const [notification,setNotification]=useState(false)
const[forgotPassword,setForgotPassword]=useState(false)
const[emailSent,setEmailSent]=useState(false)



const {data:session}=useSession()

const router=useRouter()


const handleSubmit=async(e)=>{

    e.preventDefault()


    const response=await signIn('credentials',{
        username:admin.username,
        password:admin.password,
        redirect:false
    })

    console.log(response)

    if(response.ok){
        router.push('/admin/dashboard')
    }
    

else{
    setNotification({status:'error',message:'Invalid Credentials'})
}

   
}







const handleForgot=async(e)=>{

    e.preventDefault()
    try{
        const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/forgotpassword`,{email:admin.email})
        
        setEmailSent(true)
        setNotification({status:'success',message:'Email Sent'})

    }catch(err){
  
        setNotification({status:'error',message:err.message})
    }

}


const handleVerify=async(e)=>{
    e.preventDefault()
    try{
        const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/verifypassword`,{
            token:admin.code,
            password:admin.password,
            email:admin.email
        })
        
        setNotification({status:'success',message:'Password Reset'})
        setForgotPassword(false)

    }
    catch(err){
        // console.log(err)
        setNotification({status:'error',message:err.message})
    }
}



return <div className='flex justify-center items-center w-full min-h-screen font-poppins'>

    <div className="flex flex-col min-w-[00px] min-h-[500px] p-10 justify-center border border-black drop-shadow">

    {!forgotPassword?<form className='flex flex-col space-y-8 items-center'>
       <h1 className='text-3xl font-[600]'>Admin Login</h1>
       
       {notification.message&&<Notification options={notification}/>}

        <input type="text" className='rounded-[10px] border border-slate-300 p-3 outline-none text-xl' placeholder='Username' value={admin.username} onChange={(e)=>{setAdmin({...admin,username:e.target.value})}} required/>
        <input type="password" className='rounded-[10px] border border-slate-300 p-3 outline-none text-xl' placeholder='Password' value={admin.password} onChange={(e)=>{setAdmin({...admin,password:e.target.value})}} required/>
        
        <button className='underline cursor-pointer self-start font-[400]' onClick={()=>{setForgotPassword(true); setNotification({})}}>Forgot Password?</button>
        <button type='submit' className='text-xl rounded-xl bg-primary w-[280px] px-10 py-2 font-[400] text-white' onClick={handleSubmit}>Sign In</button>
        </form>:<form className='flex flex-col space-y-8 items-center'>
      
           <h1 className='text-3xl font-[600]'>Forgot Password</h1>
           {notification.message&&<Notification options={notification}/>}
        {emailSent?
        <div className='flex flex-col items-center space-y-8'>
        <input type="text" className='rounded-[10px] border border-slate-300 p-3 outline-none text-xl' placeholder='Verification Code' value={admin.code} onChange={(e)=>{setAdmin({...admin,code:e.target.value})}} required/>
        <input type="password" className='rounded-[10px] border border-slate-300 p-3 outline-none text-xl' placeholder='New Password' value={admin.password} onChange={(e)=>{setAdmin({...admin,password:e.target.value})}} required/>
       
        <button type='submit' className='text-xl rounded-xl bg-primary w-[300px] px-10 py-2 font-[400] text-white' onClick={handleVerify}>Verify</button>
        </div>
        :<div className='flex flex-col items-center space-y-8'>
        
        <input type="email" className='rounded-[10px] border border-slate-300 p-3 outline-none text-xl' placeholder='Email' value={admin.email} onChange={(e)=>{setAdmin({...admin,email:e.target.value})}} required/>
        <button type='submit' className='text-xl rounded-xl bg-primary w-[300px] px-10 py-2 font-[400] text-white' onClick={handleForgot}>Sent OTP</button></div>
        
            }
        
        </form>}
    
    

    
    
    </div>


</div>




}

export default AuthPage;