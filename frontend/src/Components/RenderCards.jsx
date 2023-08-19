import React from "react"
import Cards from './Cards'

const RenderCards=({data,title})=>{
    if(data.length>0){
        return data.map((post)=>{<Cards key={post._id} {...post}/>})}
    else{
        return (<h2 className='mt-5 font-bold text-xl flex justify-center w-screen'>{title}</h2>)
    }
}

export default RenderCards;