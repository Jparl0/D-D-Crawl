import useState from "react";
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'


function CharSelection(){

 //this is where the form will live for creating our character
//  const [toggle ,setToggle] = useState(true)

//  function toggleDescription(){
//   setToggle(!toggle)
//  }
// const [warriorState , setWarriorState] = useState("")
// const [archerState , setArcherState] = useState("")
// const [mageState , setMageState] = useState("")

const navigate = useNavigate();
const goToCreateCharPage = () => {
    navigate('/CreateChar')
}

// onClick={goToCreateCharPage}
 return(
     
 <div className="card_container">

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Warrior</Card.Title>
    <Card.Text>
    A mighty warrior. In his bronze armor, he is mostly impenetrable to blows from any enemy. Close range, he is able to strike down his enemies with his devastating blade
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

    <div className="card">
    <div className="img_container">
    <img src={"https://media.discordapp.net/attachments/964555884778897468/965706460468215808/Screen_Shot_2022-04-18_at_2.03.10_PM.png"} alt="Card" /> 
    </div>
    <div className="container">
    <div className="text_container">
      <h4><b>Character 1</b></h4>
      <p>Warrior</p>
      
      <p>A mighty warrior. In his bronze armor, he is mostly impenetrable to blows from any enemy. Close range, he is able to strike down his enemies with his devastating blade</p>
      </div>
      <button  name="warrior" onClick={goToCreateCharPage} className="character-button" size="small">Choose Me</button>
    </div>
    </div>

    <div className="card">
    <div className="img_container">
    <img src={"https://media.discordapp.net/attachments/964555884778897468/965706347419144244/Screen_Shot_2022-04-18_at_2.03.30_PM.png"} alt="Card" />
    </div>
    <div className="container">
    <div className="text_container">
      <h4><b>Character 2</b></h4>
      <p>Archer</p>

      <p>A fearsome archer. With the power of his bow, he can strike down his enemies from a distance, before they can even see him
     </p>
     </div>
     <button  name="archer" onClick={goToCreateCharPage} className="character-button" size="small">Choose Me</button>
    </div>
    </div>
    
    <div className="card">
    <div className="img_container">
    <img src="https://media.discordapp.net/attachments/964555884778897468/965706288619196526/Screen_Shot_2022-04-18_at_2.03.49_PM.png?width=412&height=952" alt="Card"/>
    </div>
    <div className="container">
    <div className="text_container">
      <h4><b>Character 3</b></h4>
      <p>Mage</p>

      <p>A wise wizard. Through years of study with magic, he can cast nasty spells that will vanquish his enemies</p>
      </div>
      <button name="mage" onClick={goToCreateCharPage} className="character-button" size="small">Choose Me</button>

      </div>
    </div>
  

  </div>



 )
}

export default CharSelection;