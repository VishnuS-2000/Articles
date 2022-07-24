import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const AuthorCard=({name,extras,photo}) => {

    return (
        <div className="user-card py-10 flex items-center ">
            <div className="user-card__avatar pr-5 flex-none">
                
                
                {photo?
                <img className='w-[60px] h-[60px] rounded-full' src={photo} alt="avatar" />:
                <AccountCircleIcon style={{fontSize:'3rem'}}/>}
              
            </div>
            <div className="user-card__info flex-1">
                <div className="user-card__name pb-1">
                    <h1 className="font-[600] text-black text-sm tablet:text-xl desktop:text-xl ">{name}</h1>
                </div>
                <div className="user-card__bio flex">
                    <p className='text-sm   pr-5  text-tertiary font-[400] tablet:text-md'>
                        {extras.date}
                    </p>
                    <p className="text-sm  text-tertiary  tablet:text-md">
                        {extras.minRead}
                    </p>
                </div>
            </div>
        
        </div>
    )
};
