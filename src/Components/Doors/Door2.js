import React from "react";
import {useNavigate} from "react-router-dom"

function Door2(){


    const navigate = useNavigate();
    const goToRoom2 = () => {
        navigate('/Room3')
    }
    
    return(

            <img className = "right_door_image" src={require("./Dungeon Door.png")} alt="Door 1" onClick={goToRoom2}/>

    )
}

export default Door2