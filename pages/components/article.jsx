import { useEffect } from 'react';


const Article=({article}) => {




    return (
        <div className="article-content space-y-3">
            {/* Article Heading */}
            <h1 className='text-3xl font-[400] pb-4 text-primary'>{article.title}</h1>
            {/* Article Image */}
            <div className='pb-4'>
                <img className='w-100 rounded-md' src='https://picsum.photos/700/300'></img>
            </div>
            {/* Article Content */}
            <div className='my-4'>
            <p className='text-xl text-secondary font-[300] '>
                    {article.content}
            </p>
            </div>
        </div>
    )
}

export default Article