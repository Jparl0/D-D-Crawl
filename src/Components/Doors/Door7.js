import React from "react";
import {useNavigate} from "react-router-dom"

function Door7({setHasSword}){


    const navigate = useNavigate();
    const goToRoom1 = () => {
        setHasSword(false)
        navigate('/Room1')
    }


    return(
        <img 
            className = "final-door" 
            src={require("./Dungeon Door.png")} 
            alt="Door 7" 
            onClick={goToRoom1}
        />

    )
}

export default Door7