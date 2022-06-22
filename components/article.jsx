import {useRef,useEffect} from 'react'
//Article Body


const Article=({article}) => {

const refContainer=useRef()



useEffect(()=>{

refContainer.current.innerHTML=article.richText;

console.log(refContainer.current.getElementsByTagName('img')[0].getAttribute('src'))

},[article.id])

    return (
        <div className="article-content space-y-3 font-poppins">
            {/* Article Heading */}
            <h1 className='text-3xl font-[500] pb-4 text-primary'>{article.title}</h1>
          
            {/* Article Content */}
            <div ref={refContainer} className='my-4 text-xl text-secondary  space-y-5'>

            </div>
        </div>
    )
}

export default Article