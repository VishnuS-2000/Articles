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
    </div>
        
    )
}


export default Search;