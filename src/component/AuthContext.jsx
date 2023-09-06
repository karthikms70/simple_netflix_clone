import { createContext, useState } from "react"


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    
    const[value,setValue] = useState(false);
    const[datas,setDatas] = useState({
        text:"karthik",
        pass:"mani"
    })

    const toggle =()=>{
        setValue((prev)=>!prev)
      
    }
    
    
    return(
        <AuthContext.Provider value={{value,toggle,datas}}>{children}</AuthContext.Provider>
    )
}