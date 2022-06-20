
export const ArticleHeader=()=>{


    return   <div className="flex  relative flex-row h-[60px] items-center justify-between w-full  border-b  px-2 space-x-5 font-[400] text-secondary text-base">
    <div  className=" w-[20px]">
        <input className="w-[20px] h-[20px]" type='checkbox'></input>                    
    </div>



<div className="max-w-[200px]  ">
    <p>Title</p>
</div>

<div className="max-w-[230px]">
    <h4>Date</h4>
</div>

<div className="max-w-[230px] flex space-x-2">

    <h4>Author</h4>
</div>

<div className="max-w-[140px] ">
    <h4> Topic</h4>
   

</div>



<div className="max-w-[60px] flex space-x-4">


<h4>Actions</h4>
</div>


    


</div>

}