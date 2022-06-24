import type {NextPage} from 'next'
import axios from 'axios'

import { SideBar } from '../../../../components/sideBar'
import { DisplayTable } from '../../../../components/table'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'



const AuthorDashBoard:NextPage=()=>{

    const router=useRouter()

    const args={
        
        url:router.query.term?`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/search/`:`${process.env.NEXT_PUBLIC_BACKEND_URL}/authors`,
        options:{
                    headers:{
                        offset:(router.query.page-1)*15,
                        limit:15,
                        author:true
                    },
                    params:router.query
                }
    }


    return <div className='flex  min-h-screen font-poppins'>
                
    

      <SideBar active='authors'/>
      <DisplayTable   page={router.query.page} args={args} navigationURL='/admin/dashboard/authors/' limit={15} authorsType={true}/>


    </div>



}

export default AuthorDashBoard;






 export async function getServerSideProps(context){

    const session=await getSession(context)

    if(!session){


        return {
            redirect:
            {
            destination:'/login',
            permanent:false
        }

        }
    }


    return {
        props:{
            data:{}
        }
    }


 }