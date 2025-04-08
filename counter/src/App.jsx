import React, {useState} from 'react'
import './App.css'
function App() {
  const [input, setInput] = useState(0);
  if(input<0){
    setInput(0);
  }
  return (
    <div className='main'>
      <div className='mini-main2'>
        {input}
      </div>
      <div className='mini-main3'>
      <div className='mini-main4'>
        <button onClick={()=>setInput(input+1)}>
        <i class="fa-solid fa-plus white-bg"></i>
          </button>
        </div>
        <div className='mini-main5'>
        <button onClick={()=>setInput(input-1)}>
        <i class="fa-solid fa-minus"></i>
          </button>
      </div>
      </div>
      
    </div>
  )
}

export default App
