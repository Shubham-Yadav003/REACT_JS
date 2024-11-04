import {Link } from "react-router-dom";
const Home=()=>{
    return(
        <div>
            <h1> Home Page </h1>
            <nav>
                <li>
                    <Link to="/about">About</Link> 
                   
                </li>
                <li>
                    
                    <Link to="/contact">Contact</Link>
                </li>
            </nav>
        </div>
    )
}

export default  Home;