import React from "react";
import {useNavigate} from "react-router-dom"

function Door6(){


    const navigate = useNavigate();
    const goToRoom2 = () => {
        navigate('/Room2')
    }


    return(
        <img 
            className = "right_door_image_r3" 
            src={require("./arch.png")} 
            alt="Door 6" 
            onClick={goToRoom2}
        />

    )
}

export default Door6