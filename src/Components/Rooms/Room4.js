import React from "react";
import {useNavigate} from 'react-router-dom'

function Room4 ({Char, pictureURL, charState, setCurrentChar,chars,setChars}){
    
    const navigate = useNavigate();
    // alert("You have been slain!!");

    function onButtonClick () {

        fetch(`http://localhost:9292/character/${Char.id}`, {
            method:'DELETE',
            headers: {
                'Content-Type':'application/json',
            },
        })
        .then(res=>res.json())
        .then(data => console.log(data))
        setCurrentChar({})
        const updatedChars=chars.filter(char => char.id !== Char.id)
        setChars(updatedChars)
        navigate('/PickClass')
     }

return(

    <div className="room-4">
        <h1 className="room_names">ROOM 4</h1>
        <img className="room-character-picture"  src={require(`${pictureURL}`)} alt="character-image"/> 
        <img className="dragon" src={require("./dragon-fire-unscreen.gif")} />
        <marquee direction="up" behavior="slide" scrollamount="12"><h1 className="lost-text">{Char.name} has been slain!!</h1>
        <button onClick={onButtonClick} className="restart-btn">Restart!</button>
        </marquee>
    </div>
)

}

export default Room4

