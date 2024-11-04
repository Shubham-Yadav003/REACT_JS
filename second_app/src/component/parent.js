import React, {UserContext} from './UserContext';
import child from './child';
import {UserContext} from './UserContext'; 

const ParentComponent=()=>{
    user={
        name:'abcd',
        age: 45
    }

    return(
         
         
        <UserContext.Provider value={user}>
            <div>
                <h1>
                    ParentComponent
                </h1>
                <p> Name: {user.name}, Age:{user.age}</p>
            </div>     
        </UserContext.Provider> 


    ) 
}
export default ParentComponent;