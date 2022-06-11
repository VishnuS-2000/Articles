import {ArticleCard} from "./card" 
import { useEffect, useState } from 'react';



export const ArticlesContainer=({articles,limit})=>{

    
    
    return <div className="flex max-w-[730px] flex-col min-h-screen">

            {articles.rows.slice(0,limit).map((element)=>{
                return <ArticleCard key={element.id}  data={element}/>
            })}
    </div>
}




