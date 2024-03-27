import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Post() {
    let {category, id} = useParams()
    let [SearchParams, setSearchParams] = useSearchParams()
  return (
    <div className="text-xl font-semibold p-2 ">
      <h1>Post page - {`${category} ${id}` }</h1>
      <h1>Price - {SearchParams.get('price')} Model- {SearchParams.get('model')}</h1>
      {/* <h1>Post page - {category} {id} </h1> */}
    </div>
  )
}

export default Post
