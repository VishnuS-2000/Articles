import Link from "next/link"
import Button from '@mui/material/Button'; 
import Image from "next/image";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';



export const SideBar = ()=>{


    return(
        <div className="flex flex-col w-[150px] h-full justify-evenly text-black border-black drop-shadow rounded-none font-sans fixed top-0 bottom-0 left-0 z-50 mt-0 p-0">
            <div className="space-y-4">
                <div className="flex flex-col w-full px-2 py-2  h-[100px] space-x-5 fixed top-0 ">
                    <Image className="" src='/assets/index/cusat-logo.png' width='144px' height='144px' layout='fill'></Image>
                    
                    
        
                </div>
                
                
                <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                    <div className="w-full hover:bg-[#14274E] rounded-[5px]">
                    <Link href="#">
                    <Button>
                    <HomeOutlinedIcon/>
                    <h1 className="text-[#394867] font-medium ml-5 hover:text-white ">Home</h1>
                    
                    </Button>
                    </Link>
                    </div>
                    
                
                
                
                
                
                
                </div>

                <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                    <div className="w-full hover:bg-[#14274E] rounded-[5px]">
                    <Link href="#">
                    <Button>
                    <AccountCircleIcon/>
                    <h1 className="text-[#394867] font-medium ml-5 hover:text-white ">Authors</h1>
                    
                    </Button>
                    </Link>
                    </div>
                
                
                
                
                
                
                </div>

                <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                    <div className="w-full rounded-[5px] hover:bg-[#14274E]">
                    <Link href="#">
                    <Button>
                    <ArticleOutlinedIcon/>
                    <h1 className="text-[#394867] font-medium ml-5 hover:text-white ">Articles</h1>
                    
                    </Button>
                    </Link>
                    </div>
                
                
                
                
                
                
                </div>

                <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                    <div className="w-full hover:bg-[#14274E] rounded-[5px]">
                    <Link href="#">
                    <Button>
                    <BoltOutlinedIcon/>
                    <h1 className="text-[#394867] font-medium ml-5 hover:text-white ">Sales</h1>
                    
                    </Button>
                    </Link>
                    </div>
                
                
                
                
                
                
                </div>

                <div className="flex flex-col w-full py-3 cursor-pointer fixed bottom-5">
                    <div className="flex w-full px-2 py-2 cursor-pointer ">
                        <div className="w-full hover:bg-[#14274E] rounded-[5px]">
                            <Link href="#">
                            <Button>
                            <SettingsOutlinedIcon/>
                            <h1 className="text-[#394867] font-medium ml-5 hover:text-white">Settings</h1>
                            
                            </Button>
                            </Link>
                        </div>
                        
                    
                    </div>

                    <div className="flex w-full px-2 py-2 cursor-pointer">
                        <div className="w-full hover:bg-[#14274E] rounded-[5px]">
                            <Link href="#">
                            <Button>
                            <LogoutOutlinedIcon/>
                            <h1 className="text-[#394867] font-medium ml-5 hover:text-white">Logout</h1>
                            
                            </Button>
                            </Link>
                        </div>
                    
                    </div>
                
                
                
                </div>
            
            
            
            
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>





    );






}