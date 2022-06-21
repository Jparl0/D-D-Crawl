import React from "react";
import {useNavigate} from "react-router-dom"

function Door4(){


    const navigate = useNavigate();
    const goToRoom3 = () => {
        navigate('/Room3')
    }


    return(
        <img 
            className = "right_door_image_r2" 
            src={require("./Dungeon Door.png")} 
            alt="Door " 
            onClick={goToRoom3} 
        />

    )
}

export default Door4