export const AuthorsHeader=()=>{


    return   <div className="flex  relative flex-row h-[60px] items-center justify-between w-full  border-b  px-2 space-x-5 font-[800] text-secondary text-base">
    <div  className=" w-[20px]">
        <input className="w-[20px] h-[20px]" type='checkbox'></input>                    
    </div>



<div className="w-[200px]  ">
    <p>Author</p>
</div>

<div className="w-[230px]">
    <h4>Created</h4>
</div>

<div className="w-[230px] flex space-x-2">

    <h4>Designation</h4>
</div>

<div className="w-[140px] ">
    <h4>Published</h4>
   

</div>



<div className="max-w-[60px] flex space-x-4">

<h4>Actions</h4>
</div>


    


</div>

}