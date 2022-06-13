import { useEffect,useState } from "react"
import axios from 'axios'
import {useRouter} from 'next/router'

export const SearchBar  = () => {


    const [topics,setTopics]=useState([])
    const [params,setParams]=useState({
    })

    const router=useRouter()

    useEffect(()=>{
        const uniqueTopics=[]
     
        const fetchData=async()=>{
    
        try{

            const response=await axios.get('http://localhost:4000/articles')

            response.data.result.rows.map((e)=>{
                if(!uniqueTopics.includes(e.topic)){
                    uniqueTopics.push(e.topic)
                }
            })
            
        
            setTopics(uniqueTopics)

        }
        catch(err){
            console.log(err)
        }
    

    }

    fetchData()


    },[])


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(params)
        
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

       
        <div className=" sticky max-w-[400px] flex-[0.25] flex left-0 right-0 top-0 flex-col text-base border-line border-l px-4 min-h-screen justify-start py-12">
     
        <form className="flex  flex-col items-start w-full space-y-6"  >
           
            <div className="w-full">

            <input className="rounded-[20px] w-full max-h-[41px]  border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Search" name="search" value={params.term} onChange={(e)=>{setParams({...params,term:e.target.value})}} />
            <p className="text-base font-[500] m-2 ">Filter</p>  
            <input className="rounded-[15px] w-full max-h-[41px]   border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Keyword" name="keyword" value={params.keyword} onChange={(e)=>{setParams({...params,keyword:e.target.value})}} />

            </div>
            
            <input className="rounded-[15px] w-full  border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Author name" name="author" value={params.author} onChange={(e)=>{setParams({...params,author:e.target.value})}} />
      
          
            <input className=" rounded-[15px] w-full   border border-slate-300 px-8 py-2 outline-none" type="text" placeholder="Book Title" name="title" value={params.title} onChange={(e)=>{setParams({...params,title:e.target.value})}}/>
 
            <div className="flex flex-row w-full space-x-2">
                
                <input className="rounded-[15px] w-1/2 max-h-[41px]   border border-slate-300 px-8 py-2 outline-none" type="number" placeholder="Pages" name="page" value={params.pages} onChange={(e)=>{setParams({...params,pages:e.target.value})}} />
                <input className="rounded-[15px] w-1/2 max-h-[41px]   border border-slate-300 px-8 py-2 outline-none" type="number" placeholder="Issue" name="issue" value={params.issue} onChange={(e)=>{setParams({...params,issue:e.target.value})}}/>
            </div>
            
            
          
            <button className="w-full max-h-[41px]  bg-primary p-2 rounded-[20px] font-semibold text-white " type='submit' onClick={handleSubmit}>Search</button>
 



        
        <div className='py-2 space-y-2' >
        <p className='text-base font-[400]'>Select Topic</p>
   
        
        <div className='flex flex-wrap  w-full'>
        {topics.map((topic)=>{
                    return<button  className="rounded-[20px] my-1 mx-1 bg-line p-2 text-secondary text-sm " name='topic' onClick={handleTopic} value={topic} >
                        {topic}
                    </button>
                })}
        </div>


        </div>

        </form>
        

            


  
    
     
            

    </div>
        
    )
}
