import type {NextPage} from 'next'
import {useState} from "react"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';

const AuthPage:NextPage=()=>{

const [admin,setAdmin]=useState({
    username:'',password:''
})

const [error,setError]=useState(false)
const router=useRouter()

const handleSubmit=async(e)=>{

    e.preventDefault()


    const response=await signIn('credentials',{
        username:admin.username,
        password:admin.password,
        redirect:false
    })

    if(response.ok){
    router.push('/admin/dashboard')
    }
    
    setError(true)
    


}





return <div className='flex justify-center items-center w-full min-h-screen'>

    <div className="flex flex-col min-w-[500px] p-10 justify-center border drop-shadow">

    <form className='flex flex-col space-y-8 items-center'>
       <h1 className='text-3xl font-[500]'>Welcome  Back</h1>
        {error&&<p className='text-red-400 font-[400] text-xl'>Invalid Credentials</p>}
        <input type="text" className='rounded-[10px] border border-slate-300 p-3 outline-none text-xl' placeholder='Username' value={admin.username} onChange={(e)=>{setAdmin({...admin,username:e.target.value})}}/>
        <input type="password" className='rounded-[10px] border border-slate-300 p-3 outline-none text-xl' placeholder='Password' value={admin.password} onChange={(e)=>{setAdmin({...admin,password:e.target.value})}}/>
        <button type='submit' className='text-xl rounded-xl bg-primary w-[280px] px-10 py-2 font-[400] text-white' onClick={handleSubmit}>Sign In</button>
        </form>
    </div>


</div>




}

export default AuthPage;