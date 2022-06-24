import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const AuthorDetail = ({author})=>{
    return (
        <div className="hidden desktop:flex flex-col absolute right-0 justify-start space-y-5 pt-40 p-10 border-l border-[#E6E6E6]  h-full w-[250px] font-poppins ">
        <div>
        {author.photo?<img src={author.photo} width='200px' height='200px' className='rounded-[15px]' />:<AccountCircleIcon style={{fontSize:'6rem'}}/>}
        </div>
        
        <h1 className='text-2xl font-[500] text-[#757575] '>{author.name}</h1>
        <p className='text-[#757575] text-lg font-[400]'>{author.bio}</p>
        {author.specialization.split(',').map((e)=>{
            return <p>{e}</p>
        })
    } </div>
       
    )
}