import type {NextPage} from 'next'



import {SideBar} from '../../../components/sideBar'
import { useSession,getSession } from "next-auth/react";


const Home:NextPage=()=>{

    const {data:session}=useSession()

        console.log(session)
    
            return (
                
                <div className='flex  w-full min-h-screen'>
                
        
                <SideBar/>



                </div>

              )

}


export async function getServerSideProps(context){

    return {
        props:{
            session:await getSession(context)}
    }
}

export default Home;

