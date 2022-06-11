const Search  = () => {

    return(
        
        // <div className="flex flex-row justify-start">
        <div className="flex flex-col">
        <div className="justify-center p-6">
        <form className="items-center" action="">
            <div className="" >
            <input className="rounded-xl m-3 p-1 border-2 border-slate-300" type="text" placeholder="Search" name="search"></input>
            </div>
            
            <p className="text-sm font-semibold mx-3 m-2">Filter</p>
            <div>
            <input className="rounded-xl min-w-full m-3 p-1 border-2 border-slate-300" type="text" placeholder="Keyword" name="keyword"></input>
            </div>
            <div>
            <input className="rounded-xl min-w-full m-3 p-1 border-2 border-slate-300" type="text" placeholder="Author name" name="author"></input>
            </div>
            <div>
            <input className="rounded-xl min-w-full m-3 p-1 border-2 border-slate-300" type="text" placeholder="Book Title" name="title"></input>
            </div>
            <div className="flex flex-row">
                <div className=""><input className="rounded-xl w-full m-3 p-1 border-2 border-slate-300" type="text" placeholder="Pages" name="page"></input></div>
                <div className=""><input className="rounded-xl w-full m-3 p-1 border-2 border-slate-300" type="text" placeholder="Issue" name="issue"></input></div>    
            </div>
            
            
            <div>
            <input className="m-3 bg-blue-900
             w-full p-1 rounded-xl font-semibold text-white"
            type='submit' ></input>
            </div>
                

            

        </form>
        </div>
    </div>
        
    )
}


export default Search;