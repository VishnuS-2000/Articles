import {useEffect,useState} from 'react'
import Link from 'next/link'
export const LogoCard=()=>{


    const [scroll,setScroll]=useState(false)


    const handleScroll=(()=>{

        if(window.scrollY>0){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    })

    useEffect(()=>{

     window.addEventListener('scroll',handleScroll)

     return ()=>window.removeEventListener('scroll',handleScroll)

    }) 




   


    return <>
    <div className='flex w-full space-x-5 px-5 bg-primary'>
    
    <h1 className='text-white font-[500] cursor-pointer'>About Us</h1>
    <h1 className='text-white font-[500] cursor-pointer'>Contribute</h1>
    
    </div>

    <div className={`hidden desktop:flex   w-full  items-center  sticky z-50 top-0 right-0 bg-white justify-between ${scroll?"drop-shadow-sm":"shadow-none"} duration-800 `}>

    
 
    
    <Link href={'/'}>
    <img src='/assets/logo/logo.png' className='max-w-[120px] cursor-pointer   '/>
    </Link>
    
    <div className='flex flex-col justify-center items-center '>




    <h1 className='text-xl font-[600] '>Prof NR Madhava Menon </h1>
    <p className='text-xl font-[600]'>Interdisciplinary Centre for Research Ethics and Protocol</p>
    <p className='text-sm font-[400] text-secondary'>An Interuniversity center of excellence</p>
    </div>
    
    <Link href={'https://www.cusat.ac.in'}>
    <img src='/assets/index/cusat-logo.png' className='max-w-[120px] cursor-pointer  '/>
    </Link>

    </div>
    
   


    </>
}



export const LogoCardMobile=()=>{

    const [scroll,setScroll]=useState(false)


    const handleScroll=(()=>{

        if(window.scrollY>0){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    })

    useEffect(()=>{

     window.addEventListener('scroll',handleScroll)

     return ()=>window.removeEventListener('scroll',handleScroll)

    }) 



    return   <div className={`w-full flex fixed top-0 right-0 z-50 px-2 py-2  left-0  h-[60px] items-center justify-between bg-white  ${scroll?"drop-shadow":"shadow-none"} desktop:hidden  `}>

    
    <img src='/assets/logo/logo.png' className='max-w-[80px]   '/>

    <div className='flex flex-col justify-center items-center '>

    <h1 className='text-sm font-[600] tablet:text-lg'>Prof NR Madhava Menon </h1>
    <p className='text-sm font-[600] tablet:text-lg'>ICREP</p>

    </div>
    
    <Link href={'https://www.cusat.ac.in'}>
    <img src='/assets/index/cusat-logo.png' className='max-w-[80px] cursor-pointer  '/>
    </Link>
        


    </div>

}