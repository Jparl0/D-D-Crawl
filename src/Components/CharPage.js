import React , {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom"
import CharSelection from "./CharSelection"


 



function CharPage() {

// const [characterData , setCharacterData] = useState([])
//     // setting our data to an empty array 

//     useEffect(()=>{

//     } , []) // this would be getting our data
const navigate = useNavigate();
const goToRoom1 = () => {
    navigate('/Room1')
}
    return (
        <div>
            <h1>Welcome</h1> 
            <CharSelection />
            <button onClick={goToRoom1}>Proceed</button>
        </div>
    )

}

export default CharPage;