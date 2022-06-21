import React from "react";
import {useNavigate} from "react-router-dom"

function Door5(){

    const navigate = useNavigate();
    const goToRoom2 = () => {
        navigate('/Room5')
    }

    return(
        <img 
            className = "left_door_image_r3" 
            src={require("./arch.png")} 
            alt="Door 5" 
            onClick={goToRoom2}
        />


    )
}

export default Door5