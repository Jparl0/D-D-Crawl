import React, {useState} from "react";
import Door7 from "../Doors/Door7";


function Room5 ({pictureURL, items,currentChar}){
  const [victoryState , setVictoryState] = useState(false)
  const [hasSword,setHasSword]= useState(false)

  function handleVictory(){
  let hasItem=items.find(item=> item.character_id === currentChar.id)
  console.log(hasItem)
  if(hasItem){
    setVictoryState(true);
  }
  else{
    setHasSword(true)
  }
   
  }

  
return(

    <div className="room-5">
        <h1 className="room_names">ROOM 5</h1>
        
        <h2 className="room_names"> Click on the dragon to kill it and save Sam!</h2>
        <img className="room-character-picture"  src={require(`${pictureURL}`)} alt="character-image"/> 
        <div className="boss-container">
        <Door7 setHasSword={setHasSword}/>
        {/* <marquee direction="Right" behavior="alternate" scrollamount="400" >   */}
          {victoryState ? null : <img
          className="boss"
          onClick={handleVictory}
          style={{height:"150px" ,width:"200px"}}
          alt="boss" 
          src="https://i.pinimg.com/originals/5d/27/09/5d27099922e5fa89a861563885703ace.gif"
          />  }
        {/* </marquee> */}
        </div>
        {hasSword ? <h2 className="default-victory-message">You forgot to get a sword from the chest!</h2> : null}
        {victoryState ? <p className="victory-message">Victory! You saved Sam!</p> : null}
    </div>
)

}

export default Room5
