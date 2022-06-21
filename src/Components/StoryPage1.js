import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function StoryPage1({char, charState, picture}) {

const navigate = useNavigate();
function clickToNav(){
  navigate("/Room1")
}


  return (
    <div  className='storypage1'>
      
        <div className='story-container'>
            
             <marquee direction="Up" behavior="slide" height="100%" scrollamount="20">
             <img  className="story-picture" src={require(`${picture}`)}/>
              
              <h1>{char.name} who is only {char.age} years old from {char.location + " "} 
                  was invited by the leader of village to save Sam from the Evil dragon.</h1>
              
              <marquee direction="Left" scrollamount="25" behavior="slide"> <button onClick={clickToNav} className="start-play-btn"> Start Play </button></marquee>
              
              
              </marquee>
              
        </div>
      

    </div>
  )
}

export default StoryPage1