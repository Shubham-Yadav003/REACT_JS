import React,{useState} from 'react'
import Card from './components/card.jsx'
function App() {
 const[input,setInput] = useState('');
  return (
    <div>
      <Card input={input} setInput={setInput} />
      <p> From Child Componenet {input} </p>
    </div>
  )
}

export default App
