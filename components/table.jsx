
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


import Link from 'next/link'

import {AuthorsHeader} from './authorHeader'
import {AuthorRow} from './authorRow'


import {ArticleRow} from './articleRow'
import {ArticleHeader} from './articleHeader'

import axios from 'axios'
import {useRouter} from 'next/router'
import {useState,useRef} from 'react'

import { useSession } from 'next-auth/react'

import {Notification} from './notification'


import useSWR from 'swr'




export const DisplayTable=({args,page,navigationURL,limit,authorsType})=>{





    const fetcher = (args)=> axios.get(args.url,args.options).then(res => res.data)



    const { data ,error } = useSWR(args, fetcher)
    const count=data?authorsType?data.result.rows.length:data.result.count:0;
    const isLoading=!data &&!error


    console.log(data)



    
    console.log(error)


    const {data:session}=useSession()

    const router=useRouter()


    const [multipleDelete,setMultipleDelete]=useState([])


    const [notification,setNotification]=useState({})
    
    // console.log(multipleDelete)


    const handleDelete=async(id)=>{
        
        const url=authorsType?`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/author/`:`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/article/`;
        try{
            await axios.delete(`${url}${id}`,{
                headers:{
                    
                    'Authorization':`Bearer ${session.accessToken}`}
            })

            if(multipleDelete.includes(id)){
                setMultipleDelete(multipleDelete.filter((e)=>{
                    return e!==id
                }))
            }


            router.push(`${navigationURL}?page=${page}`)            
        }


        catch(err){
            // console.log(err)
        }


    }

    

    const handleDeleteMany=async()=>{
        const url=authorsType?`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/authors/`:`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/articles/`;
        // console.log(url)
       
       if(multipleDelete.length>0){
        try{ 
            await axios.delete(url,
                {
                headers:{
                    'ids':multipleDelete,
                    'Authorization':`Bearer ${session.accessToken}`}
            }).then(()=>{
            
    setNotification({status:'warning',message:authorsType?`${multipleDelete.length} authors deleted`:`${multipleDelete.length} articles deleted`})

            })

       
        router.push(`${navigationURL}?page=${page}`)      
        }catch(err){

            // console.log(err)
            setNotification({status:'error',float:true,message:err.message})
        }


    }

    }   



    const handleChange=async(e)=>{
        if(e.target.value!=' '){

            router.push(`${navigationURL}/?page=1&term=${e.target.value}`)

        }

    }








        return <div className='flex flex-col min-h-screen justify-start items-start flex-[1] font-poppins'>  

        {notification.message&&<Notification options={notification}/>}



        
        <div className='flex flex-col  py-2 h-[120px] w-full border-b border-slate-300'>

            
                <div className='flex justify-center '> 
                
                <div className='relative '>
                <input type='text' className='flex-[0.40] py-2 px-8 text-base font-[400] rounded-[30px] outline-none border border-slate-300  my-4 placeholder-secondary bg-[#FAFAFA] w-full' placeholder={authorsType?'Search Authors':'Search Articles'} onChange={handleChange}/>
                
                <svg className="absolute top-7 left-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7656 14.6895L10.6934 9.61719C11.4805 8.59961 11.9062 7.35547 11.9062 6.04688C11.9062 4.48047 11.2949 3.01172 10.1895 1.9043C9.08398 0.796875 7.61133 0.1875 6.04688 0.1875C4.48242 0.1875 3.00977 0.798828 1.9043 1.9043C0.796875 3.00977 0.1875 4.48047 0.1875 6.04688C0.1875 7.61133 0.798828 9.08398 1.9043 10.1895C3.00977 11.2969 4.48047 11.9062 6.04688 11.9062C7.35547 11.9062 8.59766 11.4805 9.61523 10.6953L14.6875 15.7656C14.7024 15.7805 14.72 15.7923 14.7395 15.8004C14.7589 15.8084 14.7797 15.8126 14.8008 15.8126C14.8218 15.8126 14.8427 15.8084 14.8621 15.8004C14.8815 15.7923 14.8992 15.7805 14.9141 15.7656L15.7656 14.916C15.7805 14.9011 15.7923 14.8835 15.8004 14.864C15.8084 14.8446 15.8126 14.8238 15.8126 14.8027C15.8126 14.7817 15.8084 14.7609 15.8004 14.7414C15.7923 14.722 15.7805 14.7043 15.7656 14.6895ZM9.14062 9.14062C8.3125 9.9668 7.21484 10.4219 6.04688 10.4219C4.87891 10.4219 3.78125 9.9668 2.95312 9.14062C2.12695 8.3125 1.67188 7.21484 1.67188 6.04688C1.67188 4.87891 2.12695 3.7793 2.95312 2.95312C3.78125 2.12695 4.87891 1.67188 6.04688 1.67188C7.21484 1.67188 8.31445 2.125 9.14062 2.95312C9.9668 3.78125 10.4219 4.87891 10.4219 6.04688C10.4219 7.21484 9.9668 8.31445 9.14062 9.14062Z" fill="black" fill-opacity="0.8"/>
                </svg>

                </div>

                </div>

                <div className='flex space-x-5 px-5 '>
                    <p className='text-lg w-[100px] text-[#343A40] font-[400]'>{`All (${count})`}</p>
                    <div className='flex items-center space-x-5'>


                    <Link href={`${navigationURL}create`}>
                    <button className='flex items-center space-x-1  justify-center  w-[120px] bg-[#394867] text-white rounded-[20px] py-2 shadow-sm text-sm'>
                    
                    <p>ADD NEW </p>
                    
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.94739H8V13.6316H6V7.94739H0V6.05265H6V0.368439H8V6.05265H14V7.94739Z" fill="white"/>
                    </svg>
                    
                    </button>
                    </Link>


                    <button className={multipleDelete.length>0?'rounded-full stroke-primary':'rounded-full stroke-gray-400'} onClick={()=>{handleDeleteMany(); setMultipleDelete([]);}} disabled={multipleDelete.length>0?false:true}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3 6H5H21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 11V17"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11V17"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </button>

                    </div>

                
             <div className='flex  space-x-3 absolute right-0 top-30px items-baseline '>
                    
                    {(page-1)*limit+limit>count?
                        <p>{(page-1)*limit+1}-{count} of {count}</p>:
                        <p>{(page-1)*limit+1}-{(page-1)*limit+limit} of {count}</p>}

                    
                    {Number(page)>=2&&<Link href={`${navigationURL}?page=${Number(page)-1}`}>
                    <button className='rounded-full w-[40px] h-[40px] text-xl hover:bg-slate-200'>
                    <NavigateBeforeIcon/>
                    </button>

                    </Link>}
                
                
                
                    {Number(page)<Math.ceil(Number(count)/limit) && <Link href={`${navigationURL}?page=${Number(page)+1}`}>
                    <button className='rounded-full w-[40px] h-[40px] text-xl hover:bg-slate-200'>
                    <NavigateNextIcon/>
                    </button>
                    </Link>}


                

                </div>


            
                    </div>


       



        </div>

        
    


        {authorsType?
        <div className='flex flex-col w-full text-[#6C757D]'>
        <AuthorsHeader  />
        {!isLoading?data.result.rows.map((element)=>{
            return <AuthorRow element={element} handleDelete={handleDelete} setMultipleDelete={setMultipleDelete} multipleDelete={multipleDelete} />
        }):<h1 className='text-lg self-center py-5'>Loading...</h1>}                

        </div>:
        <div className='flex flex-col w-full text-[#6C757D]'>
        <ArticleHeader />
        
        {!isLoading?data.result.rows.map((element)=>{
            return <ArticleRow element={element} handleDelete={handleDelete} setMultipleDelete={setMultipleDelete} multipleDelete={multipleDelete} />
        }):<h1 className='text-lg self-center py-5'>Loading...</h1>}
        
        
        </div>}


       
</div>

}















