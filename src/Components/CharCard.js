import React, {useState}from 'react'
import {useNavigate} from "react-router-dom"

function CharCard({chars,char,setCurrentChar,setChars,handleLikes}) {
   
    const navigate = useNavigate();
    function HandleClick(){
        setCurrentChar(()=>char)
        
        navigate('/storypage1')
    }

   const [updatedLikes, setLikes] = useState(char.likes) 
   

   function handleLikes(){
     
     let newLikes=1+char.likes
     setLikes((updatedLikes=> ++updatedLikes))
    
     fetch(`http://localhost:9292/character/${char.id}` ,{
     method: "PATCH",
     
     headers: {

     "Content-Type": "application/json"
  },
     body: JSON.stringify({likes: newLikes})
     })
    .then(response=>response.json())
    .then((data)=>{
     
      const updatedData = chars.map((char)=>{
      return char.id === data.id ? data : char
     })
     setChars(updatedData)
     })
   }
  

  return (
    <div className='card-container'>
        <div className='char-detail'>
        {/* <img url={char.picture}/> */}
        <p>{char.name}</p>
        <p>Location: {char.location}</p>
        <p>Age: {char.age}</p>
        <p>Basic information: {char.basic_information}</p>
        <div className='button-ctn'>

        <button className="likes-button" onClick={handleLikes}> Likes: {updatedLikes? updatedLikes:0} </button>
        
        <button className="choose-me-button" onClick={HandleClick}>Choose me!</button>    
        </div>
        </div>
    </div>
  )
}

export default CharCard