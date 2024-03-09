import { useEffect, useState } from "react"
import Phones from "./Phones"


export default function Mobile(){
    const [phon,setPhone]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data=>setPhone(data))
    },[])
    return (
        <div>
            <h1>Phone:{phon.length}</h1>
       {
         phon.map(phones=><Phones phones={phones}></Phones>)
       }
        </div>
    )
}