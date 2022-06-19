export const AuthorsHeader=()=>{


    return   <div className="flex  relative flex-row h-[60px] items-center justify-between   border-b  px-2  font-[800] text-secondary text-base">
    <div  className="w-[20px]">
        <input className="w-[20px] h-[20px]" type='checkbox'></input>                    
    </div>



<div className="flex max-w-[200px] relative right-[2%]">
    <p>Author</p>
</div>

<div className="max-w-[250px] right-[2%] relative">
    <h4>Email</h4>
</div>

<div className="max-w-[200px] relative left-[6%]">
    <h4>Specialization</h4>

</div>

<div className="max-w-[100px] relative left-[2%] ">
    <h4>Published</h4>
   

</div>



<div className="max-w-[60px]">

<h4>Actions</h4>
</div>


    


</div>

}