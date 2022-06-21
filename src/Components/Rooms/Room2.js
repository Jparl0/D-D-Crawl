import React from "react";
import Door3 from "../Doors/Door3";
import Door4 from "../Doors/Door4";

function Room2 ({pictureURL}){


return(

    <div className="room-2">
        <h1 className="room_names">ROOM 2</h1>
        <Door3 />
        <img className="room-character-picture"  src={require(`${pictureURL}`)} alt="character-image"/> 

        <Door4 />
    </div>
)

}

export default Room2
