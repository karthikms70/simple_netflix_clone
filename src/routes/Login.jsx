import "./login.css"
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../component/AuthContext"
import { useContext,useState } from "react"


export const Login=()=>{
        const navigate = useNavigate()
        const{value,toggle,datas} = useContext(AuthContext)
        console.log(value,"===log")
        const [data,setData] = useState({
            text:"",
            pass:""
        })

        const ontoggle = (e)=>{
           
             
            setData((pre)=>({
                ...pre,
                [e.target.name] : e.target.value
            }))
           
            toggle();
            // if(value){
            //     navigate("search")
            // }
        }


        const onstorage =(e)=>{
           e.preventDefault()
           localStorage.setItem('data',JSON.stringify(data))
           const dis = JSON.parse(localStorage.getItem('data'))
           if(dis.text === datas.text & dis.pass === data.pass){
            navigate("search")
           }
           else{
            alert("invalid user name and password")
           }
        
          
        }

       
    return(
        <>
        
            <div className="main">
                <form onSubmit={(e)=>onstorage(e)}>
                <p id="sin">Sign in</p>
                <input type="text" name="text" id="tex" placeholder="Email or Phone number"  autoComplete="off" onChange={ontoggle} />
                <input type="password" name="pass" id="pass" placeholder="Password" onChange={ontoggle}/>
                <button type="submit" id="sub">Sign in</button>
                </form>
                <p id="forg">Forgot password?</p>
                <p id="new">New to Karthumedia?<span>Sign Up Now.</span></p>
            </div>
          
        </>
    )
}