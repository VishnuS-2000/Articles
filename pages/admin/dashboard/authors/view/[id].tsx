import type { NextPage } from 'next'
import { SideBar } from '../../../../../components/sideBar'
import Link from 'next/link'
import { SearchBar } from '../../../../../components/searchBar'
import { useState } from 'react'

// UI by Sharun
const AuthorView: NextPage = () => {
    const [isArticle, setIsArticle] = useState(true);
    return <div className='w-full min-h-screen flex'>
        <SideBar />

        {/* Middle container */}
        <div className='flex-1 relative'>
            {/* Topbar */}
            <div className='flex items-center justify-between m-8'>
                <div className='flex gap-8'>
                    <Link href='#'>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    <h1 className='text-2xl text-primary font-[400]'>Author Name</h1>
                </div>
                <div className="flex gap-8" >
                    {/* Edit button */}
                    <Link href='#'>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    {/* Delete button */}
                    <button className='px-5 bg-[#394867] text-white rounded-md py-2 shadow-sm text-sm'>
                        Delete
                    </button>
                    {/* More options */}
                    <button type="button" className="inline-flex justify-center items-center w-full" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => { document.getElementById('more-dropdown')?.classList.toggle('hidden') }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    {/* Dropdown */}
                    <div id="more-dropdown" className="hidden origin-top-right absolute right-8 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Group tabs */}
            <div className='flex justify-between m-8'>
                <div className='flex gap-8'>
                    <button id='articleTab' className='text-md text-gray-700 py-2 px-4 border border-x-0 border-t-0 hover:border-b-gray-700 focus:border-b-gray-700' onClick={() => { setIsArticle(true) }}>
                        Articles
                    </button>
                    <button id='aboutTab' className='text-md text-gray-700 py-2 px-4 border border-x-0 border-t-0 hover:border-b-gray-700 focus:border-b-gray-700' onClick={() => { setIsArticle(false) }}>
                        About
                    </button>
                </div>
            </div>
            {/* End of middle container */}

            {/* Content */}
            {
                isArticle ? <div className='flex-1'>
                    <div className='flex flex-col items-start gap-5 px-10 py-5'>
                        <button className=''>
                            ADD NEW +
                        </button>
                        {/* TODO: Article card list display */}
                        <div className='border w-full h-[200px] bg-blue-100'></div>
                        <div className='border w-full h-[200px] bg-blue-100'></div>
                        <div className='border w-full h-[200px] bg-blue-100'></div>
                    </div>
                </div> : <div className='flex-1'>
                    <div className='flex flex-col px-10 py-5'>
                        <h1 className='text-2xl text-primary font-[400] mb-4 border border-x-0 border-t-0'>Bio</h1>
                        <p className='text-lg text-gray-600 mb-10'>
                            Professor and Head Department of Mathematics Cochin Universityof Science and Technology.
                        </p>
                        <h1 className='text-md text-primary font-[400] mb-4 border border-x-0 border-t-0'>AREAS OF SPECIALISATION</h1>
                        <div className='flex gap-5'>
                            <div className='bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-1'>Machine Learning</div>
                            <div className='bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-1'>UI/UX</div>
                            <div className='bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-1'>Deep Learning</div>
                        </div>
                    </div>
                </div>
            }
        </div>

        {/* Right sidebar */}
        <div className='flex w-[250px] border relative'>
            <div className="fixed p-5 pt-8">
                <input className="rounded-[20px] w-full max-h-[41px]  border border-slate-300 px-8 py-2 outline-none focus:outline-2" type="text" placeholder="Search" name="search" value="" />
            </div>
        </div>

    </div>




}




export default AuthorView