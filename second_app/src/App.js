// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// function App(){
//   const handleClick=()=>{
//     alert("Hi React");
//   };
//   return (

//    <div><h1>Hello World</h1>     
//     <button onClick={handleClick}> click me</button>
//     </div>
//   )
// }

// export default App;


//class component

// import React, {Component} from "react";
// class ClassComponent extends Component{
//   handleClick=()=>{
//     alert("Button has clicked");
//   };
//   render(){
//     return( 
      
//    <div>
//     <h1> This is Hello from class component </h1>
//     <button onClick={this.handleClick}>Click here</button>
//    </div>
    
//     );
//   }
// }


// import React, { Component } from "react";

// class MyClassCom extends Component {
//   constructor(props) {
//     super(props);

//     // Initialize the component
//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     // Display the current count value
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }


// ***********JSX********
// function ExampleJsx(){
//   return(
    //RuleNo1 : return single root element
    //we can also use fragments rather than div  ex: <> html code </>
   /* <div>  
      <h1>hello react</h1>
      <img></img>
    </div>
      */
    //Rule2 : close all the tags
  /*  <div>
      <img src=""></img>
      <br></br>
      <ul>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    </div>  */
    
    //rule 3 Camelcase
    // <button onClick={()=>alert("abcde")} className="button">Click</button>
//   )
// }
// export default ExampleJsx;


//By using React.createElement
// import React from "react";
// const testCreateElement=()=>{
//   return React.createElement(
    //type of element
    //properties, obj
    //children of element

//     'div',
//     {style:{color:"red"}},
//     null,
//     'hello React', React.createElement('h1',null,'welcome to the Jungle'),
//     React.createElement('p',null,'Not Welcome to Jungle').
//   );
// }

// export default testCreateElement;


// import React from "react";
// import './App.css';
// const App=()=>{
//   return (
//     <div className="app">
//       <header className="header">
//         <nav className="nav"> 
//           <ul className="nav-list">
//             <li className="nav-item"><a href="/"> Home</a></li>
//             <li className="nav-item"><a href="/"> go Home</a></li>
//             <li className="nav-item"><a href="/"> Back Home</a></li>
//           </ul>
//         </nav>
//       </header>
//       <main className="main-content">
//         <h1> Welcome to my Jungle</h1>
//       </main>

//       <footer className="footer">
//         <p> &copy; 2024 All Rights are reserved ! </p>  
//       </footer>
//     </div>
//   )
// }

// export default App;

// import React from "react";
// import './App.css';
// const App=()=>{
//   return (
//     <div>
//     <main className="main">
//       <h1 className="h"> LPU</h1>
//       <p className="p"> Learning and Growing</p>
//     </main>
//     </div>
//   )
// }

// export default App;
// import Profile from "./component/profile";

// const App=()=>{
//   const user={
//     name:'SHUBHAM',
//     age:20,
//     bio: 'This is my bio'

//   }
//   return(
//     <div>
//        <h1> Main component</h1>
//        <Profile name={user.name} age={user.age} bio={user.bio} />
//        </div>
//   )

//   };



// export default App;


// import React, { useState } from 'react';

// const DynamicButton = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Dynamic Button Example</h1>
//       <p>Current count: {count}</p>
//       <button onClick={handleIncrement}>Add</button>
//       <button onClick={handleDecrement}>Subtract</button>
//     </div>
//   );
// };

// export default DynamicButton;

import React, { useState } from 'react';

function App() {
    const [newTask, setNewTask] = useState(''); // Initialize newTask state

    const handleAdd = () => {
        // Implement your logic for adding tasks here
        // (You'll need to define this function)
    };

    const tasks = []; // You'll need to populate this array with actual tasks

    return (
        <>
        <p> Hello everyone </p>
            <h1>Task List</h1>
            <input
                type="text"
                value={newTask}
                placeholder="Add Data"
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add Task</button>
            {/* You have two identical buttons; consider removing one */}
            <ul>
                {tasks.map((task) => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
