import type { NextPage } from 'next'

const ArticleContent: NextPage = () => {
    return (
        <div className="article-content">
            {/* Article Heading */}
            <h1 className='text-3xl font-semibold pb-4'>Your portfolio is stopping you from geting that job</h1>
            {/* Article Image */}
            <div className='pb-4'>
                <img className='w-100 rounded-md' src='https://picsum.photos/1000/400'></img>
            </div>
            {/* Article Content */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur,
                nisl nisl consectetur nisl, euismod eget nisl nisl eget

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur,
                nisl nisl consectetur nisl, euismod eget nisl nisl eget

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur,
                nisl nisl consectetur nisl, euismod eget nisl nisl eget

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur,
                nisl nisl consectetur nisl, euismod eget nisl nisl eget

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur,
                nisl nisl consectetur nisl, euismod eget nisl nisl eget
            </p>
        </div>
    )
}

export default ArticleContent