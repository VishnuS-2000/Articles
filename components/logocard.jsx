import {Link} from 'next/link'
export const LogoCard=()=>{
    return   <div className='hidden desktop:flex flex-[0.10] h-screen   sticky top-0 right-0  items-start justify-center  py-5 '>

    
    <img src='/assets/logo/logo.svg' className='max-w-[80px]   '/>

        


    </div>
}



export const LogoCardMobile=()=>{



    return   <div className='w-full fixed top-0 right-0 z-50 px-5 py-2  left-0  h-[60px] items-start justify-start bg-white drop-shadow-sm   desktop:hidden  '>

    
    <img src='/assets/logo/logo.svg' className='max-w-[50px]   '/>

        


    </div>

}