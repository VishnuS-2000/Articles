import type {Nextpage} from 'next'
import {SideBar} from '../../../components/sideBar'
import {Switch} from '@chakra-ui/react'

import { useSession } from 'next-auth/react'

import {useState,useEffect} from 'react'
import axios from 'axios'

import {Notification} from '../../../components/notification'
import { fetchData } from 'next-auth/client/_utils'


const SettingsPage:Nextpage=()=>{


    const [newEmail,setNewEmail]=useState(false)
    const [newPassword,setNewPassword]=useState(false)

    const [notification,setNotification]=useState({

    })

   

    const {data:session}=useSession()


    const [admin,setAdmin]=useState({
        username:''
        })

        

    const handleEmail=async(e)=>{
        e.preventDefault()

        try{
            const response=await axios.post('http://localhost:4000/admin/changeemail',{
                username:session.user.name,
                email:admin.email
            },{
                   headers:{
                       'Authorization':`Bearer ${session.accessToken}`
                   }
            })

            setNotification({status:'success',message:'Email Updated'})
        }

        catch(err){
            setNotification({status:'error',message:err.message})
        }

    }



    const handlePassword=async(e)=>{
        e.preventDefault()

        try{
            const response=await axios.post('http://localhost:4000/admin/changepassword',{
                username:session.user.name,
                password:admin.currentPassword,
                newPassword:admin.newPassword
            },{
                   headers:{
                       'Authorization':`Bearer ${session.accessToken}`
                   }
            })

            setNotification({status:'success',message:'Password Updated'})
        }

        catch(err){
            setNotification({status:'error',message:err.message})
        }


    }





    return <div  className='flex min-h-screen  justify-start font-poppins'>
        <SideBar active='settings'/>



        <div className=' max-w-[720px] p-20 flex flex-col space-y-8'>
        <h1 className='text-3xl font-[600]'>Settings</h1>

        {notification.message&&<Notification options={notification}/>}
        <form onSubmit={handleEmail} className='space-y-8'>
      
        <div className='flex items-center space-x-3'>
      
      


        <p className='text-xl'>Change Email</p>
        <Switch size='md' onChange={()=>{setNewEmail(!newEmail)}}/>
        </div>

        {newEmail&&
        <div className='flex flex-col space-y-5'>
        <input type='email' placeholder='Email' className='text-xl p-3 border rounded-[10px] border-slate-300 ' value={admin.email} onChange={(e)=>{setAdmin({...admin,email:e.target.value})}}/>
        <button type='submit' className='bg-tertiary text-xl font-[400] text-white p-1 rounded-[10px] w-[100px]'>Save </button>
        </div>
        }

</form>
        

        <div className='flex items-center space-x-3'>
    
        <p className='text-xl'>Change Password</p>
        <Switch size='md' onChange={()=>{setNewPassword(!newPassword)}}/>
        </div>

        
        {newPassword&&
            <form onSubmit={handlePassword}>
        <div className='flex flex-col space-y-5'>
        <input type='password' placeholder='Current Password' className='outline-none text-xl p-3 border rounded-[10px] border-slate-300 ' value={admin.currentPassword} onChange={(e)=>{setAdmin({...admin,currentPassword:e.target.value})}}/>
        <input type='password' placeholder='New Password' className='outline-none text-xl p-3 border rounded-[10px] border-slate-300 ' value={admin.newPassword} onChange={(e)=>{setAdmin({...admin,newPassword:e.target.value})}}/>
        <button type='submit' className='bg-tertiary text-xl font-[400] text-white p-1 rounded-[10px] w-[100px]'>Save </button>
        </div>
         </form>
       
      
}   



        </div>

    </div>
}



export default SettingsPage