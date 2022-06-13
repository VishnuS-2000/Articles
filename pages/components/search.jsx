<<<<<<< HEAD
import Topicname from './topic'


const Search  = () => {

    return(
        
        // <div className="flex flex-row justify-start">
        <div className="flex flex-col ">
        <div className="justify-center p-6 max-w-[301px] ">
        <form className="items-center" action="">
            <div className="" >
            <input className="rounded-[20px] min-w-[301px] max-h-[41px] m-2 p-1 border-2 border-slate-300" type="text" placeholder="Search" name="search"></input>
            </div>
            
            <p className="text-sm font-semibold m-2 ">Filter</p>
            <div>
            <input className="rounded-[15px] min-w-[301px] max-h-[41px] m-2 p-1 border-2 border-slate-300" type="text" placeholder="Keyword" name="keyword"></input>
            </div>
            <div>
            <input className="rounded-[15px] min-w-[301px] max-h-[41px] m-2 p-1 border-2 border-slate-300" type="text" placeholder="Author name" name="author"></input>
            </div>
            <div className=" ">
            <input className=" rounded-[15px] min-w-[301px] max-h-[41px] m-2 p-1 border-2 border-slate-300" type="text" placeholder="Book Title" name="title"></input>
            </div>
            <div className="flex flex-row min-w-[301px]">
                
                <input className="rounded-[15px] w-1/2 max-h-[41px] m-2 p-1 border-2 border-slate-300" type="text" placeholder="Pages" name="page"></input>
                <input className="rounded-[15px] w-1/2 max-h-[41px] m-2 p-1 border-2 border-slate-300 " type="text" placeholder="Issue" name="issue"></input>    
            </div>
            
            
            <div className=" w-[301px]">
            <input className="min-w-[301px] max-h-[41px] m-2  bg-[#14274E] p-2 rounded-[20px] font-semibold text-white " type='submit' ></input>
            </div>
                

            

        </form>
        
        </div>
        <div className="flex flex-col  max-w-[301px] px-8 ">
        <div><p className='font-semibold'>Select Topic</p>
        </div>
        <div className='flex flex-wrap min-w-[301px] m-0 p-0 gap-1 '>
        <Topicname name='jazim'/>
        <Topicname name='business'/>
        <Topicname name='tech'/>
        <Topicname name='cusat'/>
        <Topicname name='school'/>
        <Topicname name='india'/>
        <Topicname name='world'/>
        <Topicname name='russia war'/>
        <Topicname name='beautiful'/>

        </div>
            
        </div>
=======
import { useEffect,useState } from "react"

export const SearchBar  = ({articles}) => {


    const [topics,setTopics]=useState([])

    useEffect(()=>{

        const uniqueTopics=[]
        articles.rows.map((e)=>{
            if(!uniqueTopics.includes(e.topic)){
                uniqueTopics.push(e.topic)
            }
        })


        setTopics(uniqueTopics)


    },[])



    return(

       
        <div className=" sticky max-w-[400px] flex-[0.25] flex left-0 right-0 top-0 flex-col text-base border-line border-l px-4 h-[full] justify-start py-12">
     
        <form className="flex  flex-col items-start w-full space-y-6" action="">
           
            <div className="w-full">

            <input className="rounded-[20px] w-full max-h-[41px] p-2 border border-slate-300" type="text" placeholder="Search" name="search"></input>
            <p className="text-base font-[500] m-2 ">Filter</p>  
            <input className="rounded-[15px] w-full max-h-[41px]  p-2 border border-slate-300" type="text" placeholder="Keyword" name="keyword"></input>

            </div>
            
            <input className="rounded-[15px] w-full p-2 border border-slate-300" type="text" placeholder="Author name" name="author"></input>
      
          
            <input className=" rounded-[15px] w-full  p-2 border border-slate-300" type="text" placeholder="Book Title" name="title"></input>
 
            <div className="flex flex-row w-full space-x-2">
                
                <input className="rounded-[15px] w-1/2 max-h-[41px]  p-2 border border-slate-300" type="text" placeholder="Pages" name="page"></input>
                <input className="rounded-[15px] w-1/2 max-h-[41px]  p-2 border border-slate-300 " type="text" placeholder="Issue" name="issue"></input>    
            </div>
            
            
          
            <button className="w-full max-h-[41px]  bg-primary p-2 rounded-[20px] font-semibold text-white " type='submit' >Search</button>
 



        
        <div className='py-6 space-y-2 ' >
        <p className='text-base font-[400]'>Select Topic</p>
    
        
        <div className='flex flex-wrap space-x-2'>
        {topics.map((topic)=>{
                    return <button  className="rounded-[20px] bg-line p-2 text-secondary text-sm " name='topic' value={topic}>
                        {topic}
                    </button>
                })}
        </div>

        </div>

        </form>
        


  
    
     
            

>>>>>>> bd56085ba6f40fa5c5b4399f2dd99c570c8d463f
    </div>
        
    )
}
<<<<<<< HEAD


export default Search;
=======
>>>>>>> bd56085ba6f40fa5c5b4399f2dd99c570c8d463f
