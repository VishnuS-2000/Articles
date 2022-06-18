import type {NextPage} from 'next'
import {useState,useEffect} from 'react'

import { SideBar } from '../../../../components/sideBar'


const AuthorCreate:NextPage=()=>{

    const [author,setAuthor]=useState({
        name:'',
        details:''

    })

    const[file,setFile]=useState()


    useEffect(()=>{

        console.log(file)

    },[file])


    return <div className='flex w-full  min-h-screen'>
                <SideBar/>



        <div className='flex flex-col w-full p-10  '>
        

        <div className='flex space-x-3'>
        
        <button>        
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 19L5 12L12 5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>

        <h1 className='text-2xl text-primary font-[400]'>Create Author</h1>

        </div>


        <div className='p-10 space-y-5'>

        <div className='flex flex-col space-y-1 ' >
        <p className='text-[#575767]  font-[600]'>AUTHOR NAME</p>
        <input type='text' value={author.name} className='outline-none border-b border-slate-300 py-5 max-w-[720px] text-xl' placeholder='Robert Langdon'   onChange={(e)=>{setAuthor({...author,name:e.target.value})}}/>
                
        </div>

        <div className='flex flex-col space-y-1' >
        <p className='text-[#575767]  font-[600]'>BIO</p>
        <input type='text' value={author.details} className='outline-none border-b border-slate-300 py-5 max-w-[720px] text-xl' placeholder='Professor,Department of Mathematics'   onChange={(e)=>{setAuthor({...author,details:e.target.value})}}/>
                
        </div>

        <div className='flex flex-col space-y-1' >
        <p className='text-[#575767]  font-[600]'>EMAIL</p>
        <input type='text' value={author.details} className='outline-none border-b border-slate-300 py-5 max-w-[720px] text-xl' placeholder='Professor,Department of Mathematics'   onChange={(e)=>{setAuthor({...author,details:e.target.value})}}/>
                
        </div>

        <div className='flex flex-col justify-center space-y-5 h-[200px]' >
        <p className='text-[#575767]  font-[600]'>AUTHOR PHOTO</p>
        <div>
        <p className='text-lg text-[#606267]'>Recommended Size Square atleast 1000px png or jpg</p>
        
        <form>
        <input type='file' placeholder='upload' className='' onChange={(e)=>{setFile(e.target.files[0])}}/>
        <img src={file}/>
        </form>


        
        <img src=''/>
        </div>

        </div>



        </div>
        

        </div>

</div>

}


export default AuthorCreate