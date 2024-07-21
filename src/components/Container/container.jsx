import React from 'react'

function container({children}) {
  return (
    <div className='w-full max-w-7 mx-auto px-4 bg-gray-400'>{children}</div>
  )
}

export default container