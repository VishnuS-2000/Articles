import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Search from './components/search'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-10 py-2">      
      <h1 className='text-5xl font-bold'>Article Publishing App</h1>  
      <Search/>  
    </div> 
  )
}

export default Home
