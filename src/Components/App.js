import React, { useState,useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import PickClass from "./PickClass.js";
import HomePage from "./Home-Page.js";
import Room1 from "./Rooms/Room1.js"
import Room2 from "./Rooms/Room2.js";
import Room3 from "./Rooms/Room3.js";
import Room4 from "./Rooms/Room4.js";
import Room5 from "./Rooms/Room5.js";
import CreateChar from "./CreateChar.js";
import CharSelection from "./CharSelection.js";
import StoryPage1 from "./StoryPage1.js";




function App()
{
    
    const [chars,setChars]=useState([])
    const [items,setItems]=useState([])
    const [charState,setCharState] = useState("")
    const [currentChar,setCurrentChar]=useState({})
    const [picture, setPicture] = useState("")
    const [pictureURL, setPictureURL] = useState("")
    useEffect(() => {
        fetch(`http://localhost:9292/character`)
            .then(res => res.json())
            .then(Chars => setChars(Chars))

        fetch(`http://localhost:9292/item`)
            .then(res => res.json())
            .then(items => setItems(items))    
        }, []);
  
        
    
      

    return(       
    <BrowserRouter>
    {/* <HomePage /> */}
        <Routes>
            <Route path='/' element={<HomePage />} />
             <Route path="/PickClass" element={<PickClass setCharState={setCharState} setPicture={setPicture} setPictureURL={setPictureURL}/>}/>  
             <Route path="/storypage1" element={<StoryPage1 char={currentChar} charState={charState} picture={picture} setPicture={setPicture}/>}/> 
             <Route path="/CreateChar" element={<CreateChar charState={charState} setCurrentChar={setCurrentChar} chars={chars} setChars={setChars}/>}/>   
             <Route path='/SelectChar' element={<CharSelection chars={chars} setChars={setChars} charState={charState} setCurrentChar={setCurrentChar} />} />
             <Route path="/Room1" element={<Room1 pictureURL={pictureURL} char={currentChar} items={items} setItems={setItems}/>}/>  
             <Route path="/Room2" element={<Room2 pictureURL={pictureURL}/>}/>  
             <Route path="/Room3" element={<Room3 pictureURL={pictureURL} />}/> 
             <Route path="/Room4" element={<Room4 pictureURL={pictureURL} Char={currentChar} charState={charState} setCurrentChar={setCurrentChar} chars={chars} setChars={setChars}/>}/> 
             <Route path="/Room5" element={<Room5 pictureURL={pictureURL} items={items} currentChar={currentChar} />}/> 

             {/* <Route path="/Room6" element={<Room6/>}/>  */}
            

        </Routes>  
    </BrowserRouter>
    )
}

export default App