import { SideBar } from '../../../../components/sideBar';
import { DisplayTable } from '../../../../components/table';

import {useRouter} from 'next/router'
import { useSession,getSession } from "next-auth/react";



const ArticleDashBoard=()=>{


    const router=useRouter()

    const args={
        
        url:router.query.term?  `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/search/`:`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,
        options:{
                    headers:{
                        offset:(router.query.page-1)*15,
                        limit:15,
                        article:true
                    },
                    params:router.query
                }
    }
  


    return <div className='flex w-full min-h-screen font-poppins '>
                
    

     <SideBar active='articles'/>
     <DisplayTable  page={(router.query.page)} args={args} navigationURL='/admin/dashboard/articles/' authorsType={false} limit={15}/>


    </div>



}

export default ArticleDashBoard;




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