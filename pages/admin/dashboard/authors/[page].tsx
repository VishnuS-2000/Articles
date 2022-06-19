import type {NextPage} from 'next'
import axios from 'axios'

import { SideBar } from '../../../../components/sideBar'
import { DisplayTable } from '../../../../components/table'
import { useRouter } from 'next/router'

const AuthorDashBoard:NextPage=({data})=>{

    console.log(data)

    const router=useRouter()

    return <div className='flex  min-h-screen'>
                
    

      <SideBar/>
     <DisplayTable data={data.result.rows} count={data.result.rows.length} page={(router.query.page)} navigationURL='/admin/dashboard/authors/' limit={15} authorsType={true}/> 


    </div>



}

export default AuthorDashBoard;



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