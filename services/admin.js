import axios from 'axios'
import { deleteArticle } from './admin';

const instance=axios.create({

    baseURL:'http://localhost:4000/admin'  
})



export const signIn=(username,password)=>{
      instance.post('/login',{username,password}).then((response)=>{

        console.log(response)
      }).catch((err)=>{
          console.log(err)
      })
}


export const register=(username,password)=>{
    instance.post('/register',{username,password}).then((response)=>{
            
        return response
    }).catch((err)=>{
        console.log(err)
    })
    
}

export const forgotPassword=(username,password)=>{

    
}

export const changePassword=(username,password)=>{

}


//Author



export const createAuthor=({author,token})=>{
    instance.post(`/authors`,author,{
        headers:{
            'Authorization':token
        }
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
}

export const updateAuthor=({id,author,token})=>{
    instance.update(`/author/${id}`,author,{
        headers:{
            'Authorization':token
        }
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
}


export const deleteAuthor=({id,token})=>{
    instance.delete(`/author/${id}`,author,{
        headers:{
            'Authorization':token
        }
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
}



//Article


export const createArticle=({article,token})=>{
    instance.post(`/articles`,article,{
        headers:{
            'Authorization':token
        }
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })

}


export const updateArticle=({id,article,token})=>{

    instance.put(`/article/${id}`,article,{
        headers:{
            'Authorization':token
        }
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{

        console.log(err)
    })
}

export const deleteArticle=({id,token})=>{
    instance.delete(`/article/${id}`,article,{
        headers:{
            'Authorization':token
        }
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
}


// Image Upload


export const uploadImage=(file,token)=>{
    instance.post('/upload',file,{
        headers:{
            'Authorization':token
        }
    }).then((response)=>{
            console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
}


