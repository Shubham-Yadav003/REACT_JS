import React from 'react'

function card(props) {
  return (
    <div>
      <input type="text"
      
      onChange={(e)=>props.setInput(e.target.value)}
       />
    </div>
  )
}

export default card
