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
const goToCharPage = () => {
    navigate('/CharPage')
}
  
    return(

        <div className="our_project">
          <h1 > Our D&D Project </h1>
          
          <div className="story_begin">
        <marquee direction="up" hegiht="80%" behavior="slide">Once upon a time, there was a small village on the edge of a river. 
          One day a villager noticed a small basket floating down the river; the villager quickly swam out to investigate. Lo and behold, the basket held a baby!
          15 years later the baby, named "Sam" by the townsfolk, grows up. He was born with a remarkable talent, but one that no one was aware of: he could code like the wind! Unfortunatly, without access to a computer, 
          his dreams of becoming "Hokage", (leader of the village), were nigh impossible.   
          One day, as usual, once Sam meets a villager, he shouts to him "I will become the Hokage!!!" The villager just walked away, shaking his head and regretting the day he ever found the basket.
          Suddenly, Sam hears a loud noise from outside of the wall. When he looks up, a giant black dragon head shows up. 
          On that day, Sam remember, that was a life under their rule of being caged like birds.
           </marquee>
           </div>
        <p className="welcome">Welcome, adventurer! Please click start to begin your journey!</p>
        {/* <Button primary as={NavLink} to="/CharPage"> onClick={clickMe} Start </Button> */}
        <Button onClick={goToCharPage}> Start </Button>
        </div>
    )

}

export default HomePage