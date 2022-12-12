import React from 'react'
import { content } from '../Content/Content'
import {Link} from "react-router-dom"

const arr=content
console.log(arr)
function Topics() {
  return (
 <div className='topics'> 
    {
        arr?.map(e=>
        <Link to={`/${e.id}`} key={e.id}className="link">
          <div className='topic1' >
            <img className='topicimg' src={e.thumbline} alt={e.title} />
            <h3>{e.title}</h3>
        </div>
        </Link>
        )
    }
 </div>
  )
}

export default Topics