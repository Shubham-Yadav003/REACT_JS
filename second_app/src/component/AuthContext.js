import React , {createContext, useContext, useState} from 'react';
const AuthContext=createContext({
    isAuthenticated:false,
    login:()=>{},
    logout:()=>{},
}) 

const AuthProvider=()=>{
    const [isAuthenticated, setIsAuthenticated]=useState(false) 

    const login=()=>{
        console.log('login in..')
        setIsAuthenticated(true)
        console.log("isauthenticated", true)
    }

    const logout=()=>{
        console.log('logout in...')
        setIsAuthenticated(false)
        console.log("isauthenticated", false)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated, login , logout}}>

        </AuthContext.Provider>
    )
    
}

export default AuthContext;