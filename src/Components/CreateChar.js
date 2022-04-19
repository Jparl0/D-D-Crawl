import {useState} from "react"
import App from "./App.js"

function CreateChar(){
    const[formData,setFormData]=useState({
        name:"",
        age:"",
        location:"",
        basicInfo:""
    })

    function handleChange(e){
        setFormData({...formData , [e.target.name]:
         e.target.value // updates form data accordingly
        })
    } 


  function handleSubmit(e){
  e.preventDefault()
   
  
//    fetch(url,{
//        method:"POST",
//        headers:{
//            "Content-type":"application/json"
//        },
//        body: JSON.stringify(formData)
//    })
//    .then(res=>res.json())
//    .then(data => console.log(data))
   }
    return(
    
   
    // our form for charcater details would go here
    // remember to re-add " onChange={handleChange} & onSubmit={handleSubmit} " back in each input
  <section className="scroll">
    <form className="character_form">
     <label>Character Name: </label>
    <input type="text" id="formName" name="name" />
     <br />

      <label>Location:  </label>
        <input  type="text" id="formLocation" name="location" />
        <br />

      <label>Age:</label>
        <input  type="text" id="formAge" name="age" />   
     <br />
     
      <label> Basic Information:</label> 
     <input type="text" id="formInfo" name="name" />

     <br />
      <input  type="submit" value="Submit" />
    </form>
    </section>

    )
}

export default CreateChar