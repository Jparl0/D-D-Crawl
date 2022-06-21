import React, { useState } from "react";
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'


function ClassSelection({setCharState,setPicture,setPictureURL}){

 //this is where the form will live for creating our character
//  const [toggle ,setToggle] = useState(true)

//  function toggleDescription(){
//   setToggle(!toggle)
// //  }
 

 
const navigate = useNavigate();
const goToCreateCharPage = (e) => {

    setCharState(()=>e.target.name)
    if (e.target.name === "Warrior"){
     setPicture(()=>"./Pictures/Warrior.png");
     setPictureURL(()=>"./Warrior.png")
    }
    else if(e.target.name === "Archer") {
    setPicture (()=>"./Pictures/Archer.png");
    setPictureURL (()=>"./Archer.png");
    
  }
    else if(e.target.name === "Mage"){
     setPicture (()=>"./Pictures/Mage.png");
     setPictureURL(()=>"./Mage.png")
    }
    navigate('/SelectChar')
}

 return(
     
 <div className="card_container">

    <div className="card">
        <div className="img_container">
           <img src={"https://cdn.discordapp.com/attachments/964555884778897468/965706642622656572/Screen_Shot_2022-04-18_at_2.02.45_PM.png"} alt="Card" /> 
        </div>
       <div className="container">
         <div className="text_container">
             <h4><b>Class 1</b></h4>
             <p>Warrior</p>
      
            <p>A mighty warrior. In his bronze armor, he is mostly impenetrable to blows from any enemy. Close range, he is able to strike down his enemies with his devastating blade</p>
       </div>
      <button  name="Warrior" onClick={goToCreateCharPage} className="character-button" size="small">Choose Me</button>
    </div>
    </div>

    <div className="card">
    <div className="img_container">
    <img src={"https://cdn.discordapp.com/attachments/964555884778897468/965706763301187684/Screen_Shot_2022-04-18_at_2.01.54_PM.png"} alt="Card" />
    </div>
    <div className="container">
    <div className="text_container">
      <h4><b>Class 2</b></h4>
      <p>Archer</p>

      <p>A fearsome archer. With the power of his bow, he can strike down his enemies from a distance, before they can even see him
     </p>
     </div>
     <button  name="Archer" onClick={goToCreateCharPage} className="character-button" size="small">Choose Me</button>
    </div>
    </div>
    
    <div className="card">
    <div className="img_container">
    <img src="https://cdn.discordapp.com/attachments/964555884778897468/965706892682870814/Screen_Shot_2022-04-18_at_2.01.14_PM.png" alt="Card"/>
    </div>
    <div className="container">
    <div className="text_container">
      <h4><b>Class 3</b></h4>
      <p>Mage</p>

      <p>A wise wizard. Through years of study with magic, he can cast nasty spells that will vanquish his enemies</p>
      </div>
      <button name="Mage" onClick={goToCreateCharPage} className="character-button" size="small">Choose Me</button>

      </div>
    </div>
  

  </div>



 )
}

export default ClassSelection;