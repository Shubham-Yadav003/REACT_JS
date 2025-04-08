import React,{useState} from "react";
import "./App.css"
function App() {
const [weight,setWeight]=useState(0);
const[height,setHeight]=useState(0);
const[bmi,setBmi]=useState('');
const[message,setMessage]=useState('');

//Logic:
let calBmi=(e)=>{
  e.preventDefault();
  if(weight==0 || height==0){
    alert("Please enter valid values");
    return;
  }
  else{
    let bmi = (weight/(height*height)*703);
    setBmi(bmi.toFixed(2));

    if(bmi<25){
      setMessage("You are underweight");
    }
    else if(bmi>=25 && bmi<=30){
      setMessage("You are normal");
    }
    else{
      setMessage("You are overweight");
    }
  }
}

  //Reload
  let reload =()=>{
    window.location.reload();
  }



  return (
    <div className="App">
      <div className="container">
        <h2> BMI Calculator </h2>
        <form onSubmit={calBmi}>
          <div>
            <label> Weight(lbs) </label>
            <input
              type="text"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            ></input>
          </div>

          <div>
            <label> Height(in) </label>
            <input
              type="text"
              placeholder="Enter Height"
              value={height}
              onChange={(e)=>setHeight(e.target.value)}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
