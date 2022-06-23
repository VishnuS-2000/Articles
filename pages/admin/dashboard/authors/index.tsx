import type {NextPage} from 'next'
import axios from 'axios'

import { SideBar } from '../../../../components/sideBar'
import { DisplayTable } from '../../../../components/table'
import { useRouter } from 'next/router'

const AuthorDashBoard:NextPage=({data})=>{

    const router=useRouter()

    return <div className='flex  min-h-screen font-poppins'>
                
    

      <SideBar active='authors'/>
     <DisplayTable data={data.result.rows} count={data.result.rows.length} page={(router.query.page)} navigationURL='/admin/dashboard/authors/' limit={15} authorsType={true}/> 


    </div>



}

export default AuthorDashBoard;



export async function getServerSideProps({query}){

    const offset=(query.page-1)*15

    
    const url=query.term?`http://localhost:4000/admin/search/`:'http://localhost:4000/authors'

    try{
    const response=await axios.get(url,{
        headers:{
            offset:offset,
            limit:15,
            author:true
        },
        params:query
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