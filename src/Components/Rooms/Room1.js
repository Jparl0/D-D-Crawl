import React from "react";
import Door1 from "../Doors/Door1";
import Door2 from "../Doors/Door2";

function Room1 (){


return(

    <div>
        <h1 className="room_names">ROOM 1</h1>
        <Door1 />
        <Door2 />
        {/* <img src={require("../Archer.png")} className="character_placement"/> */}
    </div>
)

}

export default Room1
