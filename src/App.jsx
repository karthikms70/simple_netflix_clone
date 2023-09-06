
import { Route, Routes } from "react-router-dom"
import { Footer } from "./component/Footer"
import { Header } from "./component/Header"
import "./global.css"
import { Login } from "./routes/Login"
import { Search } from "./routes/Search"

function App(){
  
  return(
  <>
  <Header/>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="search" element={<Search/>}/>
    
  </Routes>
  <Footer/>
  </>
  )

}

export default App