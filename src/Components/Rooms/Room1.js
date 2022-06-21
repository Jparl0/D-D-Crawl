import React, {useState} from 'react'
import Door1 from "../Doors/Door1";
import Door2 from "../Doors/Door2";
import Chest from "../Chests/Chest1.js";

function Room1({pictureURL, char,items,setItems}){

const[message, setMessage] = useState(false)


    
return(

    <div className="room-1">
        <h1 className="room_names">ROOM 1</h1>
         <Door1 />
       
        <img className="room-character-picture"  src={require(`${pictureURL}`)} alt="character-image"/> 
        
         <Door2 />
        {/* <img src={require("../Pictures/Archer2.png")} className="character_placement"/> */}
        <Chest char={char} items={items} setItems={setItems} setMessage={setMessage} message={message}/>

        {message ? <p className='chest-message'>You Recieved a sharp sword</p> : null}

        </div>
)

}

export default Room1
