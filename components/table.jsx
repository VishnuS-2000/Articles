
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Link from 'next/link'


import {ArticleRow} from '../components/articleRow'
import {ArticleHeader} from '../components/articleHeader'


export const DisplayTable=({data,count,page,navigationURL,limit})=>{

    console.log(data)


        return <div className='flex flex-col min-h-screen justify-start items-start flex-1'>  
        <div className='flex flex-col  py-2 h-[120px] w-full border-b border-slate-300'>

            
                <div className='flex'> 
                <input type='text' className='flex-[0.40] p-2 text-base font-[400] rounded-[30px] outline-none border border-slate-300 ml-20 my-4 placeholder-secondary bg-[#FAFAFA]' placeholder='Search writers,articles,topic'/>
                </div>

                <div className='flex space-x-5 px-5 '>
                    <p className='text-lg font-[400] text-[#343A40] font-[400]'>{`All (${count})`}</p>
                    <div className='flex items-center space-x-5'>
                    <button className='flex items-center space-x-1  justify-center  w-[120px] bg-[#394867] text-white rounded-[20px] py-2 shadow-sm text-sm'>
                    
                    <p>ADD NEW </p>
                    
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.94739H8V13.6316H6V7.94739H0V6.05265H6V0.368439H8V6.05265H14V7.94739Z" fill="white"/>
                    </svg>
                    
                    </button>
                    
                    <button className='rounded-full'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3 6H5H21" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 11V17" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11V17" stroke="#9BA4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </button>

                    </div>

                
             <div className='flex  space-x-3 absolute right-0 top-30px items-baseline'>
                    
                    <p>{(page-1)*limit+1}-{(page-1)*limit+limit} of {count}</p>

                    
                    {Number(page)>=2&&<Link href={`${navigationURL}/${Number(page)-1}`}>
                    <button className='rounded-full w-[40px] h-[40px] text-xl hover:bg-slate-200'>
                    <NavigateBeforeIcon/>
                    </button>

                    </Link>}
                
                
                
                    {Number(page)<Math.ceil(Number(count)/limit) && <Link href={`${navigationURL}/${Number(page)+1}`}>
                    <button className='rounded-full w-[40px] h-[40px] text-xl hover:bg-slate-200'>
                    <NavigateNextIcon/>
                    </button>
                    </Link>}


                

                </div>


            
                    </div>


       



        </div>



        <div className='flex flex-col w-full text-[#6C757D]'>
        <ArticleHeader/>
        {data.map((element)=>{
            return <ArticleRow element={element}/>
        })}
        
        
        </div>
       
</div>

}















