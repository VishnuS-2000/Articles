import { Avatar } from "@mui/material"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';






export const AuthorCard = ()=>{

    return(
        <div className="flex flex-row h-[50px]  space-x-2 border-t-2 border-b-2 m-0 mt-0">
        <div  className=" w-[50px] h-full item-center content-center p-3">
            <input className="w-4 h-4" type='checkbox'></input>
        
            
        </div>
        
        <div className="w-[60px] items-center content-center h-full p-1 ">
            <Avatar className="w-[40px] h-[40px]" src="https://www.famousauthors.org/famous-indian-authors" alt="jazim" ></Avatar>
        

        </div>
        
        <div className=" w-[190px] items-center content-center h-full p-3">
            <h4>Article</h4>

        </div>
        
        <div className="w-[230px] items-center content-center h-full p-3 ">
            <h4>Date</h4>

        </div>
        
        <div className="w-[300px] items-center content-center h-full p-3 ">
            <h4>Jazimsadath@gmail.com</h4>

        </div>
        
        <div className="w-[160px] items-center content-center h-full text-center p-2">
            <div className="w-1/2 p-1 rounded-[20px] bg-[#394867] items-center text-center">
                <p className="text-white">Danger</p>
            
            </div>

        </div>
        
        <div className="w-[80px] items-center content-center h-full p-3">
            <EditOutlinedIcon/>

        </div>
        
        <div className="w-[80px] items-center content-center h-full p-3">
            <DeleteForeverOutlinedIcon/>

        </div>
    
    
    
    
    
    
    
    </div>
    )

}