import axios from 'axios'

const instance=axios.create({'baseURL':'http://localhost:4000'})

export const getAllArticles=(options)=>{
    const data=instance.get('/articles',options).then((response)=>{
    
        return response.data
    }).catch((err)=>{
        return err  
    })

    return data

}

export const getArticleById=(id)=>{
    instance.get(`/articles/${id}`).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
}

export const getAllAuthors=(options)=>{
    instance.get('/authors',options).then((response)=>{

        console.log(response)

    }).catch((err)=>{
        console.log(err)
    })
}

export const getAuthorById=(id)=>{
    instance.get(`/authors/${id}`).then((response)=>{

      console.log(response)  
    }).catch((err)=>{
        console.log(err)
    })
}