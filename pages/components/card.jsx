import Image from "next/image"

export const ArticleCard=({author,article})=>{

    return <div className="flex  max-w-[730px] px-2 py-8 space-y-2  border-line border-t font-[300]">

    <div className="flex flex-col space-y-2 flex-[0.8]">
    <div className="flex space-x-3 justify-start item-center space-y-0 ">
    <img src="https://static.independent.co.uk/2022/04/26/16/054348ef248cdd6196d71ae7a049b305Y29udGVudHNlYXJjaGFwaSwxNjUxMDcxMzkz-2.66390146.jpg?quality=75&width=982&height=726&auto=webp" className="rounded-full w-[24px] h-[24px]"/>
    <p className="text-sm text-secondary">Amit Das</p>
    <p className="text-sm text-quarternary">4 days ago</p>
    </div>

    <div className="flex flex-col justify-start space-y-1">
    

    <h1 className="text-primary text-2xl font-[400]">Your portfolio is stopping you from getting that job</h1>
    <p className="text-secondary font-[300]">An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...</p>


    </div>


    <div className="flex text-sm  text-tertiary justify-between items-center py-6">
        <div className="flex space-x-3 items-center">
        <p className="bg-[#F2F2F2] px-2 py-1 rounded-2xl cursor-pointer">Portfolio</p>
        <p>3 min read</p>
        <p>Selected for you</p>

        </div>

        <button className="mr-5 mt-1"><img src="./assets/card/icon.svg"/></button>
    </div>

    </div>
    <div className="flex-[0.2] drop-shadow-sm">
    <Image src="http://picsum.photos/300/300" height="140px" width="140px" className="float-right  flex cursor-pointer" alt="article-image" />
    </div>
    



    </div>


}

