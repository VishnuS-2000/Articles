import type { NextPage } from 'next'
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import { ArticleCard } from './components/card';
import { getAllArticles,getAuthorById } from '../services/user';






const Home: NextPage = ({data}) => {


  console.log


  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-10 py-2">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>

    </div>
  )
}


export async function getServerSideProps(){
  
  try{
  const response=await axios.get('http://localhost:4000/articles')

  return {props:{data:response.data}}
  }
  catch(err){

    return {props:{data:{}}}
  }
}





export default Home