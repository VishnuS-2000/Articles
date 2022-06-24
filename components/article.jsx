import {useRef,useEffect} from 'react'
//Article Body


const Article=({article}) => {

const refContainer=useRef()



useEffect(()=>{

refContainer.current.innerHTML=article.richText;



},[article.id])

    return (
        <div className="article-content space-y-2  font-poppins flex flex-col w-full">
            {/* Article Heading */}
            <h1 className='text-primary font-[500] w-full text-2xl desktop:text-3xl  pb-4 '>{article.title}</h1>
          
            {/* Article Content */}
            <div ref={refContainer} className=' text-base w-full  desktop:text-xl text-secondary  my-4  text-justify space-y-5'>

            </div>
        </div>
    )
}

export default Article