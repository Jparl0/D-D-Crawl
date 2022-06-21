import React from "react";
import Door5 from "../Doors/Door5";
import Door6 from "../Doors/Door6";


function Room3 ({pictureURL}){


return(

    <div className="room-3">
        <h1 className="room_names">ROOM 3</h1>
        <Door5 />
        <img className="room-character-picture"  src={require(`${pictureURL}`)} alt="character-image"/> 

        <Door6 />
    
    </div>
)

}

export default Room3
