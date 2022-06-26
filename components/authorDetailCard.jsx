import {useRouter} from 'next/router'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const AuthorDetail = ({author})=>{




    const router=useRouter()

    const handleChange=(e)=>{
        if(e.target.value!=''){

            router.push(`/search/?term=${e.target.value}`)

        }
        
           

    }
    
    
    return (
        <div className="hidden desktop:flex  flex-[0.20] flex-col p-5 justify-start  space-y-5  border-l border-[#E6E6E6]   sticky top-0 right-0 h-screen   font-poppins">
        
        <div className='relative'>
        <input type='text' className='flex-[0.60] py-2 px-8 text-base font-[400] rounded-[30px] outline-none border border-slate-300  my-4 placeholder-secondary bg-[#FAFAFA] w-full' placeholder='Search ' onChange={handleChange}/>
                    
        <svg className="absolute left-2 top-7" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7656 14.6895L10.6934 9.61719C11.4805 8.59961 11.9062 7.35547 11.9062 6.04688C11.9062 4.48047 11.2949 3.01172 10.1895 1.9043C9.08398 0.796875 7.61133 0.1875 6.04688 0.1875C4.48242 0.1875 3.00977 0.798828 1.9043 1.9043C0.796875 3.00977 0.1875 4.48047 0.1875 6.04688C0.1875 7.61133 0.798828 9.08398 1.9043 10.1895C3.00977 11.2969 4.48047 11.9062 6.04688 11.9062C7.35547 11.9062 8.59766 11.4805 9.61523 10.6953L14.6875 15.7656C14.7024 15.7805 14.72 15.7923 14.7395 15.8004C14.7589 15.8084 14.7797 15.8126 14.8008 15.8126C14.8218 15.8126 14.8427 15.8084 14.8621 15.8004C14.8815 15.7923 14.8992 15.7805 14.9141 15.7656L15.7656 14.916C15.7805 14.9011 15.7923 14.8835 15.8004 14.864C15.8084 14.8446 15.8126 14.8238 15.8126 14.8027C15.8126 14.7817 15.8084 14.7609 15.8004 14.7414C15.7923 14.722 15.7805 14.7043 15.7656 14.6895ZM9.14062 9.14062C8.3125 9.9668 7.21484 10.4219 6.04688 10.4219C4.87891 10.4219 3.78125 9.9668 2.95312 9.14062C2.12695 8.3125 1.67188 7.21484 1.67188 6.04688C1.67188 4.87891 2.12695 3.7793 2.95312 2.95312C3.78125 2.12695 4.87891 1.67188 6.04688 1.67188C7.21484 1.67188 8.31445 2.125 9.14062 2.95312C9.9668 3.78125 10.4219 4.87891 10.4219 6.04688C10.4219 7.21484 9.9668 8.31445 9.14062 9.14062Z" fill="black" fillOpacity="0.8"/>
        </svg>
        </div>
        
        <div className='py-10 px-5 space-y-3'>
        {author.photo?<img src={author.photo} width='100px' height='100px' className='rounded-[15px]' />:<AccountCircleIcon style={{fontSize:'4rem'}}/>}
        
        <h1 className='text-2xl font-[500]  '>{author.name}</h1>
        
        <div className='space-y-3'>
        <p className='text-[#757575] text-base  font-[300]'>{author.bio}</p>
        
        {author.specialization!==''&&<h1 className='font-[500]'>Areas of Specialization :</h1>}
        {author.specialization.split(',').map((e)=>{
            return <p className='text-[#757575] text-base font-[500]'>{e}</p>
        })
       
        
    }
    </div>
    </div>
    
    </div>
       
    )
}