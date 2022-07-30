import React from 'react'

export const Header = ({handleDark}) => {
  return (
      <div className='header'>
          <h1>Notes</h1>
          <button className='save'
            onClick={()=>handleDark((prev)=>!prev)}
          >
              Toggle
          </button>
    </div>
  )
}
