
import {useRef,useEffect,useState} from 'react'



const Article=({article,limit,setLimit}) => {

const refContainer=useRef()



useEffect(()=>{
// console.log(limit)
refContainer.current.innerHTML=article.richText.slice(0,limit);

},[article.id,limit])

useEffect(()=>{
    
    setLimit(10480)
    
    },[article.id])
    





    return (
        <div className="article-content space-y-2  font-poppins flex flex-col w-full">
        
        
            {/* Article Heading */}
            <h1 className='text-primary font-[600] w-full text-xl tablet:text-3xl desktop:text-3xl  pb-4 '>{article.title}</h1>
          
            {/* Article Content */}
            <div ref={refContainer} className='text-base    tablet:text-xl desktop:text-xl text-secondary  my-4  text-justify space-y-8'>
            </div>

            
        </div>
    )
}

export default Article