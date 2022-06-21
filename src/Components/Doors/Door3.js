import React from "react";
import {useNavigate} from "react-router-dom"



function Door3(){

    const navigate = useNavigate();
    const goToRoom1 = () => {
        navigate('/Room4')
    }

    return(

            <img 
                className = "left_door_image_r2" 
                src={require("./Dungeon Door.png")} 
                alt="Door 3" 
                onClick={goToRoom1}
            />
        
    )
}

export default Door3