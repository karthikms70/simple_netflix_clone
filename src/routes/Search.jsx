import { useState,useEffect } from "react";
import "./search.css"
import axios from "axios"

const url = "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const Search = ()=>{
   
    const [search,setSearch] = useState("")
    const [searchList,setSearchList] = useState([])
    
    useEffect ( ()=>{
        

        const timeout = setTimeout(()=>{
            if(search){
            fetch()
        }
        },300)

        return () =>{
            clearTimeout(timeout)
        }
        },[search])
    
    const fetch = async () => {
        const response =  await axios(url ,{
            params :{
                query : search,
            },
        });
       
        setSearchList(response.data.results) 
      
    }
    const clear = (e)=>{
        if (e.key === "Backspace"){
        setSearch("")
        setSearchList([])
        }
    }

    
    const handleChange =(e) =>{
        setSearch(e.target.value)
      }
    return (
        <>
        <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="se"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
        <input type="search" name="search" id="ser"  placeholder="Type Movies" autoComplete="off" onChange={handleChange} onKeyDown={clear}/>
        <div className="display">
            {searchList.map((data)=>(
                 <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            ))}
          
           
        </div>
        </div>
        </>
    )
}