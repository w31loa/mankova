import React, { FC } from 'react'

const Comment:FC<any> = ({name,text}) => {
  return (
    <div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-yellow-300">{name}</h5>
        <h3>{text}</h3>
    </div>
  )
}

export default Comment