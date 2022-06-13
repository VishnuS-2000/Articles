import type { NextPage } from "next";
import {useRouter} from 'next/router'
import axios from 'axios'


const resultPage:NextPage=({data})=>{

  console.log(data)


  return <div>

      Search Results 
  </div>  


}


export async function getServerSideProps({query}){
  console.log(query)
  try{


    const response=await axios.get('http://localhost:4000/articles/search/',{
      params:query
    })

    return {
      props:{
        data:response.data
      }
    }

  }


  catch(err){
    console.log(err)
    return {
      props:{
        data:{}
      }
    }
  }

}

export default resultPage;