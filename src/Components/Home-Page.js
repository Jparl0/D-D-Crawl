import React from "react";
import styled from "styled-components";
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'

function HomePage (){

  const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    }
  };

  const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center
  color: white;
  padding: 30px 80px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

function clickMe() {
  alert("You clicked me!");
}

const navigate = useNavigate();
const goToPickClass = () => {
    navigate('/PickClass')
}
  
    return(

        <div className="our_project">
          <h1 className="title">Saving Sinatra Sam </h1>
          
          <div className="story_begin">
        <marquee direction="up"  behavior="slide" height="100%">Once upon a time, there was a small village on the edge of a river. One day, a villager heard crying coming from a small basket floating down the river; the villager quickly swam out to investigate. Low and behold, the basket held a baby!
          15 years later the baby, named "Sam" by the townsfolk, is all grown up. Sam was born with a remarkable talent, he could code like the wind! A passing trader realized this,
          and told Sam of a place he should go to hone his talents. At once, he embarked on a noble quest to the Ruby Caves in order to study under the famous adventurer's guild secluded there.
          Unfortunately for him, the guild wasnt the only ancient thing that called the caves home... 
          </marquee>
           </div>
        <p className="welcome">Welcome, adventurer! Please click start to begin your journey!</p>
        {/* <Button primary as={NavLink} to="/PickClass"> onClick={clickMe} Start </Button> */}
        <Button  className="start-button" onClick={goToPickClass}> Start </Button>
        </div>
    )

}

export default HomePage