import { createContext, useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({children})=>{
    const [count , setCount] = useState(10)

    const increment = () =>{
        setCount(prev => prev + 1)
    }
    return(
        <AuthContext.Provider value={{count , increment}}>
            {children}
        </AuthContext.Provider>
    )
}

