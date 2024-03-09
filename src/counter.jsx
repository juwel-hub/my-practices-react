import { useState } from "react";

export default function counter(){
const [player,setPlayer]=useState(11)
const handlePlayerAdd=()=>{
    const newPlayer=player+1;
      setPlayer(newPlayer)
}
const handlePlayerRemove=()=>{
    setPlayer(player-1)
}
return (
    <div style={{
        border:'1px solid pink',
        padding:'20px',
        borderRadius:'15px',
        marginBottom:'50px'
    }}>
        <h1>Players: {player}</h1>
        <button onClick={handlePlayerAdd}>player add</button>
        <button onClick={handlePlayerRemove}>player remove</button>
    </div>
)
}
 