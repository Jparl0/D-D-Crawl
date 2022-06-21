import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'
import App from "./App.js"

function CreateChar({charState,setCurrentChar,chars,setChars}){
    const[formData,setFormData]=useState({
        name:"",
        age:"",
        location:"",
        basic_information:"",
        class_type: charState,
        like:0
    })
    const navigate = useNavigate();

    function handleChange(e){
        setFormData({...formData , [e.target.name]:
         e.target.value // updates form data accordingly
      
        })
    } 



  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:9292/character`, {
       method: "POST",
       headers: {
           "Content-type":"application/json"
       },
       body: JSON.stringify(formData)
   })
   .then(res=>res.json())
   .then(data => {
    const newChars=[...chars,data];  
    setChars(newChars); 
    setCurrentChar(data);
  })
   navigate("/storypage1")
   }
   

    return(
    
   
    // our form for charcater details would go here
    // remember to re-add " onChange={handleChange} & onSubmit={handleSubmit} " back in each input
    <div className="create-page">
 <section className="scroll">
    <form className="character_form"  onSubmit={handleSubmit}>
     <label>Character Name: </label>
    <input type="text" id="formName" name="name" value={formData.name} onChange={handleChange}/>
     <br />

      <label>Location:  </label>
        <input  type="text" id="formLocation" name="location" value={formData.location} onChange={handleChange}/>
        <br />

      <label>Age:</label>
        <input  type="text" id="formAge" name="age" value={formData.age} onChange={handleChange}/>   
     <br />
     
      <label> Basic Information:</label> 
     <input type="text" id="formInfo" name="basic_information" value={formData.basic_information} onChange={handleChange}/>

     <br />
      <input className="submit-button" type="submit" value="Submit" />
    </form >
    </section>
        </div>
    )
}

export default CreateChar