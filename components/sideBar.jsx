import Link from "next/link"
import Button from '@mui/material/Button'; 
import Image from "next/image";
import { IconButton } from '@chakra-ui/react';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


import { signOut } from "next-auth/react";
import { Alert } from "@mui/material";

export const SideBar = ({active})=>{
    
    const navBarHidden=['articles','authors']


  


    const [show,setShow]=useState(navBarHidden.includes(active)?false:true)

    return(<div className='font-poppins'>
        
        {navBarHidden.includes(active)&&<div className='fixed top-0 left-0 '>
        <IconButton onClick={()=>{setShow(!show)}}>
        <MenuIcon/>
        </IconButton>
        </div>}

        {show&&<div className={navBarHidden.includes(active)?"flex flex-col  w-[250px] items-center min-h-screen  justify-between border-r border-[#E6E6E6]   bg-white fixed z-50 drop-shadow left-0":"flex flex-col  w-[250px] items-center min-h-screen  justify-between border-r border-[#E6E6E6]  bg-white "}>

                {navBarHidden.includes(active)&&<div className='absolute top-0 right-0 '>
                <IconButton onClick={()=>{setShow(!show)}}>
                <CloseIcon/>
                </IconButton>
                </div>}
                
                
        
               <div className="flex flex-col items-center  px-2 py-2  max-w-[80%]">
                    <Image className="" src='/assets/logo/logo.svg' width='140px' height='88px' ></Image>
                  
            
                </div>
            
                <div className="w-full flex-[0.80] flex flex-col items-center space-y-20">
                
            
                <div className='space-y-5 self-center flex-[0.20]'>
                
                <SideBarOption link='/admin/dashboard'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.7334 10H7.7334C9.7334 10 10.7334 9 10.7334 7V5C10.7334 3 9.7334 2 7.7334 2H5.7334C3.7334 2 2.7334 3 2.7334 5V7C2.7334 9 3.7334 10 5.7334 10Z"  strokeWidth="1.5" strokeMiterLimit="10" strokeLineCap="round" strokeLineJoin="round"/>
                    <path d="M17.7334 10H19.7334C21.7334 10 22.7334 9 22.7334 7V5C22.7334 3 21.7334 2 19.7334 2H17.7334C15.7334 2 14.7334 3 14.7334 5V7C14.7334 9 15.7334 10 17.7334 10Z" strokeWidth="1.5" strokeMiterLimit="10" strokeLineCap="round" strokeLineJoin="round"/>
                    <path d="M17.7334 22H19.7334C21.7334 22 22.7334 21 22.7334 19V17C22.7334 15 21.7334 14 19.7334 14H17.7334C15.7334 14 14.7334 15 14.7334 17V19C14.7334 21 15.7334 22 17.7334 22Z" strokeWidth="1.5" strokeMiterLimit="10" strokeLineCap="round" strokeLineJoin="round"/>
                    <path d="M5.7334 22H7.7334C9.7334 22 10.7334 21 10.7334 19V17C10.7334 15 9.7334 14 7.7334 14H5.7334C3.7334 14 2.7334 15 2.7334 17V19C2.7334 21 3.7334 22 5.7334 22Z"  strokeWidth="1.5" strokeMiterLimit="10" strokeLineCap="round" strokeLineJoin="round"/>
                </svg>

                <h1>Home</h1>
                </SideBarOption>

              
              
                <SideBarOption link='/admin/dashboard/authors?page=1'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8935 10.87C12.7935 10.86 12.6735 10.86 12.5635 10.87C10.1835 10.79 8.29346 8.84 8.29346 6.44C8.29346 3.99 10.2735 2 12.7335 2C15.1835 2 17.1735 3.99 17.1735 6.44C17.1635 8.84 15.2735 10.79 12.8935 10.87Z"  strokeWidth="1.5" strokeLineCap="round" strokeLineJoin="round"/>
                <path d="M7.89337 14.56C5.47337 16.18 5.47337 18.82 7.89337 20.43C10.6434 22.27 15.1534 22.27 17.9034 20.43C20.3234 18.81 20.3234 16.17 17.9034 14.56C15.1634 12.73 10.6534 12.73 7.89337 14.56Z"  strokeWidth="1.5" strokeLinecap="round" strokeLineJoin="round"/>
                </svg>
                  
                
                <h1>Authors</h1>
                </SideBarOption>

                <SideBarOption link='/admin/dashboard/articles/?page=1'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7334 7.04V16.96C20.7334 18.48 20.5934 19.56 20.2334 20.33C20.2334 20.34 20.2234 20.36 20.2134 20.37C19.9934 20.65 19.7034 20.79 19.3634 20.79C18.8334 20.79 18.1934 20.44 17.5034 19.7C16.6834 18.82 15.4234 18.89 14.7034 19.85L13.6934 21.19C13.2934 21.73 12.7634 22 12.2334 22C11.7034 22 11.1734 21.73 10.7734 21.19L9.75342 19.84C9.04342 18.89 7.79339 18.82 6.97339 19.69L6.96338 19.7C5.83338 20.91 4.83342 21.09 4.25342 20.37C4.24342 20.36 4.2334 20.34 4.2334 20.33C3.8734 19.56 3.7334 18.48 3.7334 16.96V7.04C3.7334 5.52 3.8734 4.44 4.2334 3.67C4.2334 3.66 4.23342 3.65 4.25342 3.64C4.82342 2.91 5.83338 3.09 6.96338 4.3L6.97339 4.31C7.79339 5.18 9.04342 5.11 9.75342 4.16L10.7734 2.81C11.1734 2.27 11.7034 2 12.2334 2C12.7634 2 13.2934 2.27 13.6934 2.81L14.7034 4.15C15.4234 5.11 16.6834 5.18 17.5034 4.3C18.1934 3.56 18.8334 3.21 19.3634 3.21C19.7034 3.21 19.9934 3.36 20.2134 3.64C20.2334 3.65 20.2334 3.66 20.2334 3.67C20.5934 4.44 20.7334 5.52 20.7334 7.04Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.7334 10.25H16.7334"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.7334 13.75H14.7334"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h1>Articles</h1>
                </SideBarOption>
                


            <SideBarOption link='/admin/dashboard/settings'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            <h1>Settings</h1>
            </SideBarOption>

            <SideBarOption >
            <svg className='stroke-[#A65959]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4399 14.62L19.9999 12.06L17.4399 9.5"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.76001 12.06H19.93"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            <h1 className="text-[#A65959]">Logout</h1>
            </SideBarOption>
            
           
                
        

               

                
                
                
  
     
        
        </div>
        
        </div>

        
        
        
        </div>}





  </div>  );



}

const SideBarOption=({children,link})=>{

    const handleClick=async()=>{
        await signOut({callbackUrl:'/login'})
    }

    return<div className="flex min-w-[180px] rounded-[4px] cursor-pointer justify-start items-baseline">
           
    
   {link?<Link href={link}>
    <button className="w-full p-4 h-[60px] hover:bg-slate-100 flex items-center justify-center space-x-5 stroke-primary font-[400] text-lg">
        {children}
    </button>

    </Link>:  <button onClick={()=>{handleClick()} } className="w-full p-4 h-[60px] hover:bg-slate-100 flex items-center justify-center space-x-5 stroke-primary font-[400] text-lg">
    {children}
</button>}
    
</div>
}