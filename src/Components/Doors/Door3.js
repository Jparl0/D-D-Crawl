import React from "react";
import {useNavigate} from "react-router-dom"



function Door3(){

    const navigate = useNavigate();
    const goToRoom5 = () => {
        navigate('/Room5')
    }

    return(

            <img className = "left_door_image" src={require("./Dungeon Door.png")} alt="Door 1" onClick={goToRoom5}/>
        
    )
}

export default Door3