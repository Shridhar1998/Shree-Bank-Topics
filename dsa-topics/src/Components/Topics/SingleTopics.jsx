import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { content } from '../Content/Content'
import {AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai"
function SingleTopics() {
    const param =useParams()
    const contentdata=content
    const [data,setdata]=useState(contentdata[param.id-1].data)
    const [page,setpage]=useState(0)
    console.log(data,"Dfas")
   
  return (
    <div className='single'>
        <button disabled={page===0} onClick={()=>setpage(page-1)}><AiFillCaretLeft fontSize={"3rem"} /> </button>
        <img src={data[page]} alt="image" />
        <button disabled={page===data.length-1} onClick={()=>setpage(page+1)}><AiFillCaretRight  fontSize={"3rem"} /></button>
    </div>
  )
}

export default SingleTopics