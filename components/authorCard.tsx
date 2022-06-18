
export const AuthorCard=({name,extras}) => {

    return (
        <div className="user-card py-10 flex items-center">
            <div className="user-card__avatar pr-5 flex-none">
                <img className='w-[60px] h-[60px] rounded-full' src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="avatar" />
            </div>
            <div className="user-card__info flex-1">
                <div className="user-card__name pb-1">
                    <h1 className="text-2xl font-[400] text-quarternary">{name}</h1>
                </div>
                <div className="user-card__bio flex">
                    <p className='pr-5 font-light text-tertiary'>
                        {extras.date}
                    </p>
                    <p className="text-tertiary">
                        {extras.minRead}
                    </p>
                </div>
            </div>
            <div className='user-card__actions flex-noner'>
                <button type="button" className="w-full rounded-md px-4 py-2 bg-white text-gray-700 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
};
