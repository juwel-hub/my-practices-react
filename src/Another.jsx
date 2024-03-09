import { useEffect, useState } from "react"
import User from "./User"

export default function recap(){
    const [users,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(rec => rec.json())
        .then(data =>setUser(data))
        
    },[])
    return (
       <div>
         <h2>hello world: {users.length}</h2>
        {
            users.map(user=> <User user={user}></User>)
        }
       </div>
    )
}