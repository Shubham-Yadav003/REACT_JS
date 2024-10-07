import React, {useState, useRef} from 'react';
function Appp(){
    const[name,setName]=useState(null);
    const inputRef= useRef(null);

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`submitted Name:${name}`)
}

const resetInput=()=>{
    inputRef.current.value="";
}
    return (
         <div>
            <h2> useRef Hook Example </h2>
            <form onSubmit ={handleSubmit}>
                <input 
                type='text' 
                ref={inputRef}
                placeholder='Enter your name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></input>
                <button onClick={resetInput}>Submit</button>
            </form>
            <button onClick={resetInput}>Reset </button>
         </div>
    )
}

export default Appp ;