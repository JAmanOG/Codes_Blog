import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-max my-auto px-4 bg-gray-400'>{children}</div>
  )
}

export default Container