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
                    <h1 className="font-[500] text-quarternary text-md desktop:text-xl ">{name}</h1>
                </div>
                <div className="user-card__bio flex">
                    <p className='text-sm desktop:text-base pr-5 font-light text-tertiary'>
                        {extras.date}
                    </p>
                    <p className="text-sm text-tertiary desktop:text-base">
                        {extras.minRead}
                    </p>
                </div>
            </div>
        
        </div>
    )
};
