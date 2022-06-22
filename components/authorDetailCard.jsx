import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const AuthorDetail = ({author})=>{
    return (
        <div className="hidden desktop:flex flex-col fixed right-0 justify-start space-y-5 pt-40 p-10 border-l border-[#E6E6E6]  h-full w-[280px] font-poppins ">
        <div>
        {author.photo?<img src={author.photo} width='100px' height='100px' className='rounded-[15px]' />:<AccountCircleIcon/>}
        </div>
        
        <h1 className='text-2xl font-[500] text-[#757575] '>{author.name}</h1>
        <p className='text-[#757575] text-lg font-[400]'>{author.bio}</p>
        
        
        </div>
    )
}