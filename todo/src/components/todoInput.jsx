import React,{useState} from 'react'

function TodoInput(props) {
    const [input,setinput] = useState('');
    const handleEnter = (e)=>{
        if(e.keyCode===13){
            props.addList(input);
            setinput('');
        }
    }

  return (
    <div className='input-container'>
       <input type='text' placeholder="Enter value" className='input-box-todo' 
       value={input}
       onChange={(e)=>{setinput(e.target.value)}}
       onKeyDown={handleEnter} 
       />
      <button className='add-btn' onClick={()=>{
        props.addList(input);
        setinput('');
      }} >+</button>

     
    </div>
  )
}

export default TodoInput
