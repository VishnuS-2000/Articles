import { useEffect,useState } from "react"
import axios from 'axios'
import {useRouter} from 'next/router'
import { loadGetInitialProps } from "next/dist/shared/lib/utils"

export const SearchBar  = () => {


    const [topics,setTopics]=useState([])
    const [params,setParams]=useState({
    })

    const router=useRouter()

    useEffect(()=>{
        const uniqueTopics=[]
     
        const fetchData=async()=>{
    
        try{

            const response=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`)

            response.data.result.rows.map((e)=>{
                if(!uniqueTopics.includes(e.topic)){
                    uniqueTopics.push(e.topic)
                }
            })
            
        
            setTopics(uniqueTopics)

        }
        catch(err){
            // console.log(err)
        }
    

    }

    fetchData()


    },[])


    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(params)
        
        var url='/search?'
        url+=params.term?`&term=${params.term}`:''
        url+=params.keyword?`&keyword=${params.keyword}`:''
        url+=params.author?`&author=${params.author}`:''
        url+=params.title?`&title=${params.title}`:''
        url+=params.pages?`&pages=${params.pages}`:''
        url+=params.issue?`&issue=${params.issue}`:''

        if(url){
            router.push(url)
        }
        

    }


    const handleTopic=(e)=>{
    e.preventDefault()
        
    router.push(`/search?topic=${e.target.value}`)        
    }



    return(

       
        <div className="mobile:hidden desktop:flex sticky  max-w-[25%] flex-[0.25]  right-0 top-0 flex-col text-base border-line border-l px-4 min-h-screen justify-start py-12">
     
        <form className="flex  flex-col items-start w-full space-y-6"  >
           
            <div className="w-full">

            <div className='relative'>
            <input className="rounded-[20px] w-full max-h-[41px]  border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Search" name="search" value={params.term} onChange={(e)=>{setParams({...params,term:e.target.value})}} />
            
            <svg className="absolute top-3 left-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7656 14.6895L10.6934 9.61719C11.4805 8.59961 11.9062 7.35547 11.9062 6.04688C11.9062 4.48047 11.2949 3.01172 10.1895 1.9043C9.08398 0.796875 7.61133 0.1875 6.04688 0.1875C4.48242 0.1875 3.00977 0.798828 1.9043 1.9043C0.796875 3.00977 0.1875 4.48047 0.1875 6.04688C0.1875 7.61133 0.798828 9.08398 1.9043 10.1895C3.00977 11.2969 4.48047 11.9062 6.04688 11.9062C7.35547 11.9062 8.59766 11.4805 9.61523 10.6953L14.6875 15.7656C14.7024 15.7805 14.72 15.7923 14.7395 15.8004C14.7589 15.8084 14.7797 15.8126 14.8008 15.8126C14.8218 15.8126 14.8427 15.8084 14.8621 15.8004C14.8815 15.7923 14.8992 15.7805 14.9141 15.7656L15.7656 14.916C15.7805 14.9011 15.7923 14.8835 15.8004 14.864C15.8084 14.8446 15.8126 14.8238 15.8126 14.8027C15.8126 14.7817 15.8084 14.7609 15.8004 14.7414C15.7923 14.722 15.7805 14.7043 15.7656 14.6895ZM9.14062 9.14062C8.3125 9.9668 7.21484 10.4219 6.04688 10.4219C4.87891 10.4219 3.78125 9.9668 2.95312 9.14062C2.12695 8.3125 1.67188 7.21484 1.67188 6.04688C1.67188 4.87891 2.12695 3.7793 2.95312 2.95312C3.78125 2.12695 4.87891 1.67188 6.04688 1.67188C7.21484 1.67188 8.31445 2.125 9.14062 2.95312C9.9668 3.78125 10.4219 4.87891 10.4219 6.04688C10.4219 7.21484 9.9668 8.31445 9.14062 9.14062Z" fill="black" fillOpacity="0.8"/>
            </svg>


            </div>


            <p className="text-base font-[500] m-2 ">Filter</p>  
            <input className="rounded-[15px] w-full max-h-[41px]   border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Keyword" name="keyword" value={params.keyword} onChange={(e)=>{setParams({...params,keyword:e.target.value})}} />

            </div>
            
            <input className="rounded-[15px] w-full  border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Author name" name="author" value={params.author} onChange={(e)=>{setParams({...params,author:e.target.value})}} />
      
          
            <input className=" rounded-[15px] w-full   border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Article Title" name="title" value={params.title} onChange={(e)=>{setParams({...params,title:e.target.value})}}/>
 
            <div className="flex flex-row w-full space-x-2">
                
            <button className="w-full max-h-[41px]  bg-primary p-2 rounded-[20px] font-semibold text-white " type='submit' onClick={handleSubmit}>Search</button>
 

            </div>
            
            
          
          



        
        <div className='py-2 space-y-2' >
        <p className='text-base font-[400]'>Select Topic</p>
   
        
        <div className='flex flex-wrap  w-full drop-shadow font-[500]'>
        {topics.map((topic,index)=>{
                    return<button key={index}  className="rounded-[20px] my-1 mx-1 bg-line p-2 text-secondary text-sm " name='topic' onClick={handleTopic} value={topic} >
                        {topic}
                    </button>
                })}
        </div>


        </div>

        </form>
        

            


  
    
     
            

    </div>
        
    )
}




export const SearchBarMobile=()=>{


    const router=useRouter()

    const handleChange=(e)=>{
        if(e.target.value!=''){

            router.push(`/search/?term=${e.target.value}`)

        }
        
           

    }
    

    return <div className="relative flex h-[100px] items-center w-full justify-center p-5 desktop:hidden">

    <div className='relative'>
    <input type='text' className='flex-[0.60]  py-2 px-8 text-base font-[400] rounded-[30px] outline-none border border-slate-300  my-4 placeholder-secondary bg-[#FAFAFA] w-full tablet:flex-[0.80]'  placeholder='Search ' onChange={handleChange} />
                
    <svg className="absolute left-2 top-7" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7656 14.6895L10.6934 9.61719C11.4805 8.59961 11.9062 7.35547 11.9062 6.04688C11.9062 4.48047 11.2949 3.01172 10.1895 1.9043C9.08398 0.796875 7.61133 0.1875 6.04688 0.1875C4.48242 0.1875 3.00977 0.798828 1.9043 1.9043C0.796875 3.00977 0.1875 4.48047 0.1875 6.04688C0.1875 7.61133 0.798828 9.08398 1.9043 10.1895C3.00977 11.2969 4.48047 11.9062 6.04688 11.9062C7.35547 11.9062 8.59766 11.4805 9.61523 10.6953L14.6875 15.7656C14.7024 15.7805 14.72 15.7923 14.7395 15.8004C14.7589 15.8084 14.7797 15.8126 14.8008 15.8126C14.8218 15.8126 14.8427 15.8084 14.8621 15.8004C14.8815 15.7923 14.8992 15.7805 14.9141 15.7656L15.7656 14.916C15.7805 14.9011 15.7923 14.8835 15.8004 14.864C15.8084 14.8446 15.8126 14.8238 15.8126 14.8027C15.8126 14.7817 15.8084 14.7609 15.8004 14.7414C15.7923 14.722 15.7805 14.7043 15.7656 14.6895ZM9.14062 9.14062C8.3125 9.9668 7.21484 10.4219 6.04688 10.4219C4.87891 10.4219 3.78125 9.9668 2.95312 9.14062C2.12695 8.3125 1.67188 7.21484 1.67188 6.04688C1.67188 4.87891 2.12695 3.7793 2.95312 2.95312C3.78125 2.12695 4.87891 1.67188 6.04688 1.67188C7.21484 1.67188 8.31445 2.125 9.14062 2.95312C9.9668 3.78125 10.4219 4.87891 10.4219 6.04688C10.4219 7.21484 9.9668 8.31445 9.14062 9.14062Z" fill="black" fillOpacity="0.8"/>
    </svg>
    </div>
    
    </div>
}