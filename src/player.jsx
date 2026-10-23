import {useState} from 'react';
export default function Player({initialPlayerName,symbol}){
const[playerName,setPlayerName]=useState(initialPlayerName);
const[isEditing,setIsEditing]=useState(false);
// function handleClick(){
// setIsEditing(true);
// }
 function handleChange(event){
     setPlayerName(event.target.value);
 }

let editablePlayerName= <span>{playerName}</span>;
if(isEditing){
   ( editablePlayerName=<input type = "text" required Value={playerName} onChange={handleChange}/>);
}


    return(
        <>
        <li>
            <span>
           {editablePlayerName}
          
            <span>{symbol}</span>
            </span>
        </li>
        <button onClick={()=>setIsEditing((isEditing)=>!isEditing)}>{isEditing? "save"  :"edit"}</button>
        </>



    );
}
