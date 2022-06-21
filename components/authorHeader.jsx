export const AuthorsHeader=({selectAll,setSelectAll})=>{


    return   <div className="flex flex-row h-[60px] items-center justify-between   border-b  px-2  font-[600] text-secondary text-base">
    <div  className="w-[20px]">
        <input className="w-[20px] h-[20px]" type='checkbox' onClick={()=>{setSelectAll(!selectAll)}}/>                 
    </div>



<div className="flex w-[200px]">
    <p>Author</p>
</div>

<div className="w-[230px] ">
    <h4>Email</h4>
</div>

<div className="w-[230px] ">
    <h4>Specialization</h4>

</div>

<div className="w-[120px] ">
    <h4>Published</h4>
   

</div>



<div className="w-[100px]">

<h4>Actions</h4>
</div>


    


</div>

}