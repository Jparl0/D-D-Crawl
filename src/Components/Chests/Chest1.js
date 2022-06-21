import React, {useState, char} from "react";
import {useNavigate} from "react-router-dom"


function Chest({char,items,setItems, setMessage, message}){

const handleChestClick = ()=>{

    let item = {name: "sword", description: "A sharp sword",character_id:char.id}
    
        fetch(`http://localhost:9292/item` ,{
        method: "POST",
        
        headers: {
   
        "Content-Type": "application/json"
     },
        body: JSON.stringify(item)
        })
       .then(response=>response.json())
       .then((data)=>{
        const newItem=[...items,data];
        setItems(newItem);
        
        })
      
     setMessage(true)
     console.log(message)
    }

    return(
            <img 
                className = "chest-image" 
                src={require("./Chest.png")} 
                alt="Chest"
                onClick={handleChestClick}

            />

    )
}

export default Chest
