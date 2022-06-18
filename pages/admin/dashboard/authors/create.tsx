import type {NextPage} from 'next'
import Image from 'next/image'
import {useState,useEffect} from 'react'

import { SideBar } from '../../../../components/sideBar'


const AuthorCreate:NextPage=()=>{

    const [author,setAuthor]=useState({
        name:'',
        details:''

    })

    const[image,setImage]=useState()
    const[preview,setPreview]=useState(false)


    const handleChange=()=>{

    }

    const handleUpload=()=>{

    }


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
        <p className='text-[#575767]  font-[600]'>AREAS OF SPECIALIZATION</p>

        <select className='max-w-[300px] p-3 outline-none bg-white border-2 rounded-[10px] text-base border-[#394867] text-primary font-[400]'>
            <option class>Law</option>


        </select>
     
                
        </div>




        <div className='flex flex-col space-y-1' >
        <p className='text-[#575767]  font-[600]'>EMAIL</p>
        <input type='text' value={author.details} className='outline-none border-b border-slate-300 py-5 max-w-[720px] text-xl' placeholder='Professor,Department of Mathematics'   onChange={(e)=>{setAuthor({...author,details:e.target.value})}}/>
                
        </div>

        
    
        

        <div className='flex max-w-[720px] justify-between  bg-green-200 items-start p-2 h-[200px]' >
      
        
            
        
    
        <form className='flex flex-col items-start'>
        <p className='text-[#575767]  font-[600]'>AUTHOR PHOTO</p>
        <p className='text-lg text-[#606267]'>Recommended Size Square atleast 1000px PNG or JPG</p>
        <button type='submit' onClick={handleUpload} className='p-2 bg-primary rounded-[10px] px-3 text-white font-[600]'>Upload</button>
        <input id='upload-button' type='file' placeholder='upload' className='hidden' onChange={handleChange}/>

    

        </form>

    <label htmlFor='upload-button'>
        <div className='relative'>
      

        <Image src='https://picsum.photos/120/120' height='120' width='120' className='rounded-full'/>
        <div className='bg-white opacity-40 rounded-full absolute w-[120px] top-0 h-[120px] flex items-center justify-center'>
            
           
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.0837 36.4167C44.0837 37.4333 43.6798 38.4084 42.9609 39.1272C42.242 39.8461 41.267 40.25 40.2503 40.25H5.75033C4.73366 40.25 3.75864 39.8461 3.03975 39.1272C2.32086 38.4084 1.91699 37.4333 1.91699 36.4167V15.3333C1.91699 14.3167 2.32086 13.3416 3.03975 12.6228C3.75864 11.9039 4.73366 11.5 5.75033 11.5H13.417L17.2503 5.75H28.7503L32.5837 11.5H40.2503C41.267 11.5 42.242 11.9039 42.9609 12.6228C43.6798 13.3416 44.0837 14.3167 44.0837 15.3333V36.4167Z" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.9997 32.5833C27.2339 32.5833 30.6663 29.1508 30.6663 24.9167C30.6663 20.6825 27.2339 17.25 22.9997 17.25C18.7655 17.25 15.333 20.6825 15.333 24.9167C15.333 29.1508 18.7655 32.5833 22.9997 32.5833Z" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        
         
        
        </div>
      
    </div>

    </label>

        </div>



        </div>
        

    </div>

</div>

}


export default AuthorCreate