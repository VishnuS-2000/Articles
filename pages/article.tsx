import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// Components imports
import UserCard from './components/userCard'
import ArticleContent from './components/articleContent'

const Article: NextPage = () => {
  return (
    <div className="relative">
      <div className="w-60 min-h-screen shadow-md absolute p-5 bg-slate-200 left-0">
        Nav bar
      </div>
      <div className="article absolute ml-60 mr-60 p-5">
        <div className='heading'>
          <h1 className="text-2xl font-bold">Article publishing site Heading</h1>
          <UserCard />
          <ArticleContent />
        </div>
      </div>
      <div className="w-60 min-h-screen shadow-md absolute right-0 p-5 bg-slate-200">
        Search bar
      </div>
    </div>
  )
}

export default Article
