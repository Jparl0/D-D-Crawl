import React from 'react'
import CharCard from './CharCard'
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'
function CharSelection({chars,charState,setCurrentChar , setChars,handleLikes}) {
    const navigate = useNavigate();
    function goToCreateCharPage(){
        navigate('/CreateChar')
    }
  return (
      <div className="select-char-page">
    <div className='cards-container'>
        {chars.filter(char=> char.class_type===charState).map(char=> <CharCard key={char.id}chars={chars} char={char} setCurrentChar={setCurrentChar} setChars={setChars} handleLikes={handleLikes}/>)}
        {/* {chars.map(char=> <CharCard key={char.id} char={char}/>)} */}
        
    </div>
    <div>
        <button className="create-button"onClick={goToCreateCharPage}>Create your own Character</button>
    </div>
    </div>
    
  )
}

export default CharSelection