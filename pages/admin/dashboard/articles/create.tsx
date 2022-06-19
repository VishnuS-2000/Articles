import type { NextPage } from 'next'
import { SideBar } from '../../../../components/sideBar';

import dynamic from 'next/dynamic'
import {useState} from 'react'



const RichTextEditor= dynamic(() => import('@mantine/rte'), { ssr: false });


const ArticleCreate = () => {

   
    const initialValue='Type Here'.repeat(1500)
    const [text,setText]=useState(initialValue)



    return (
        <div className='flex w-full h-screen'>
            <SideBar/>
            <form className='flex-1 p-5 flex flex-col justify-start bg-green-200 align-top  h-full'>
                <div className='flex flex-row-reverse gap-5 mr-5 items-center'>
                    <a className='' href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H5H21" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a className='' href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <button className='bg-[#394867] text-white px-8 py-1 rounded-full'>Publish</button>
                </div>


                <div className="flex px-5 py-2 space-x-3 ">
                    <label className="w-36 text-3xl text-gray-600 pr-5 border-r-4 border-gray-300">Title</label>
                    <input className="w-full px-3 py-2 text-xl focus:outline-none caret-gray-600 text-gray-600 placeholder:text-slate-600" type="text" placeholder='Enter a title' />
                </div>

                <div className="flex px-5 py-2 space-x-3 ">
                    <label className="w-36 text-3xl text-gray-600 pr-5 border-r-4 border-gray-300">By</label>
                    <select name="author_select" className="w-full px-3 py-2 text-xl focus:outline-none text-gray-600 appearance-none caret-gray-400">
                        <option className='text-gray-600' value="">Select an author</option>
                        <option className='text-gray-600' value="1">Author 1</option>
                        <option className='text-gray-600' value="2">Author 2</option>
                        <option className='text-gray-600' value="3">Author 3</option>
                    </select>
                </div>
                
                
                
                
                


                <RichTextEditor value={text} onChange={setText} className='w-full h-[90%] overflow-y-auto text-2xl'/>
     
                
               
            </form>

             
         
        </div>
    );
}


export default ArticleCreate




