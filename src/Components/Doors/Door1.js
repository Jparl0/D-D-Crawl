import React from "react";
import {useNavigate} from "react-router-dom"
// import Dungeon Door from "Dungeon Door.png"

function Door1(){

    const navigate = useNavigate();
const goToRoom2 = () => {
    navigate('/Room2')
}

    return(
            <img className = "left_door_image" src={require("./Dungeon Door.png")} alt="Door 1" onClick={goToRoom2}/>
        

    )
}

export default Door1
