import React, { useState } from "react";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import CharPage from "./CharPage.js";
import HomePage from "./Home-Page.js";
import Room1 from "./Rooms/Room1.js"
import Room2 from "./Rooms/Room2.js";
import Room3 from "./Rooms/Room3.js";
import CreateChar from "./CreateChar.js";




function App()
{


    return(       
    <BrowserRouter>
    {/* <HomePage /> */}
        <Routes>
            <Route path='/' element={<HomePage />} />
             <Route path="/CharPage" element={<CharPage/>}/>  
             <Route path="/Room1" element={<Room1/>}/>  
             <Route path="/Room2" element={<Room2/>}/>  
             <Route path="/Room3" element={<Room3/>}/> 
             <Route path="/CreateChar" element={<CreateChar/>}/>   


             
        </Routes>  
    </BrowserRouter>
    )
}

export default App