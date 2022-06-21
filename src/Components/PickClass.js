import React , {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom"
import ClassSelection from "./ClassSelection"


 



function PickClass({setCharState,setPicture,setPictureURL}) {

// const [characterData , setCharacterData] = useState([])
//    setting our data to an empty array 

//     useEffect(()=>{
//     } , []) // this would be getting our data
const navigate = useNavigate();
const goToRoom1 = () => {
    navigate('/Room1')
}
    return (
        <div className="center_ele">
            <h1 className="char_page_title">Choose Your Class!</h1> 
            <ClassSelection setCharState={setCharState} setPicture={setPicture} setPictureURL={setPictureURL}/>
            <button onClick={goToRoom1}>Proceed</button>
        </div>
    )

}

export default PickClass;