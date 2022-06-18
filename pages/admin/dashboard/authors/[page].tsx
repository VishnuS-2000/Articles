import type {NextPage} from 'next'
import axios from 'axios'

import { SideBar } from '../../../../components/sideBar'
import { DisplayTable } from '../../../../components/table'
import { useRouter } from 'next/router'

const ArticleDashBoard:NextPage=({data})=>{

    console.log(data)

    const router=useRouter()

    return <div className='flex w-full min-h-screen'>
                
    

     <SideBar/>
     <DisplayTable data={data.result.rows} count={data.result.count} page={(router.query.page)} navigationURL='/admin/dashboard/articles/' limit={15}/>


    </div>



}

export default ArticleDashBoard;



export async function getServerSideProps({query}){

    const offset=(query.page-1)*15

    try{
    const response=await axios.get('http://localhost:4000/authors',{
        headers:{
            offset:offset,
            limit:15
        }
    })

    return {
        props:{
            data:response.data
        }
    }

}

catch(err){
    return {
        props:{
            data:{}
        }
    }
}

}