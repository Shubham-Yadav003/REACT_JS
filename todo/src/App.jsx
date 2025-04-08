import React , {useState} from 'react'
import './App.css'
import TodoInput from './components/todoInput.jsx'
import TodoList from './components/todoList.jsx'
function App() {

  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText != '')
    setListTodo([...listTodo,inputText]);
  }

  const deleteItem =(key)=>{
    let newList = [...listTodo];
    newList.splice(key,1);
    setListTodo(newList);
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList}/> 
        <h1 className='app-heading'>Todo</h1>
        <hr/>
        {listTodo.map((item,index)=>{
          return(<TodoList 
          item={item} 
          key={index} 
          deleteItem={deleteItem} 
          index={index} />
          )
        })}
        

      </div>
      
    </div>
  )
}

export default App
