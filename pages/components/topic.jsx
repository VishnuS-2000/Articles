

const Topicname = (props) =>{
    const handle = ()=>{
        console.log(props.name)
    }
    return(
        <div className="p-0">
    <input className="bg-slate-300 rounded-[15px] min-h-[36px] text-md w-min my-3 p-2 " type='button' value={props.name} ></input>
    </div>


    )



}



export default Topicname