import React from "react";
import styled from "styled-components";
import Typewriter from "./Typing";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Tile from "./Tile";
import { useSpring, animated } from "react-spring";

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  display: flex; /* Add flexbox display */
  flex-direction: column; /* Arrange items in a row */
  align-items: center; /* Vertically align items */
  justify-content: space-around;
  background: url(https://img.freepik.com/free-photo/space-travel-collage-design_23-2150163773.jpg?t=st=1717343884~exp=1717347484~hmac=654c66ef6878cc3feb7b595941842d3c554d5ea5de4c15b4bc1dc9ae3771900f&w=2000);
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: white;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  color: #6d6d6d;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex; /* Add flexbox display */
  flex-direction: column; /* Arrange items in a column */
  /* Center items horizontally */
  gap: 2rem; /* Add some spacing between buttons */
`;

const Button = styled.button`
  display: block;
  width: 200px;
  padding: 1rem;
  margin: 1rem auto;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
  background-color: #5e3c96;
  transition: background-color 0.3s;

  &:hover {
    background-color: #472b72;
  }

  &:nth-child(2) {
    background-color: #7e57c2;
    &:hover {
      background-color: #5e3c96;
    }
  }

  &:nth-child(3) {
    background-color: #9575cd;
    &:hover {
      background-color: #7e57c2;
    }
  }
  /* ButtonContainer.css */

  .ButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .Button {
    /* ... other styles ... */
  }

  .Button img {
    max-width: 100px;
    height: auto;
    margin-right: 1rem;
  }

  &:nth-child(4) {
    background-color: #b39ddb;
    &:hover {
      background-color: #9575cd;
    }
  }
`;
const Home = () => {
  const headerAnimation = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(2)" },
    config: { duration: 1000, yoyo: true },
  });

  const subHeaderAnimation = useSpring({
    from: { transform: "translateY(30px)" },
    to: { transform: "translateY(0px)" },
    config: { duration: 1000, yoyo: true },
  });

  const buttonAnimation = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
    config: { duration: 1000, yoyo: true },
  });

  return (
    <HomeContainer>
      <animated.h1 style={headerAnimation}>Sarthak Pandey</animated.h1>

      <Typewriter
        text={[
          "Hello there! 👋",
          "😊 Welcome to my website!",
          "I am a developer😄  and a designer🤔.",
        ]}
        typeSpeed={100}
        deleteSpeed={50}
        duration={1000}
      />

      <animated.h2 style={subHeaderAnimation}>
        Full Stack Developer & Designer
      </animated.h2>

      <ButtonContainer>
        <animated.button style={buttonAnimation} link="/About">
          More About Me 🤔
        </animated.button>
        <animated.button style={buttonAnimation} link="/education">
          Education 🤯
        </animated.button>
        <animated.button style={buttonAnimation} link="/work-experience">
          Work Experience 😳
        </animated.button>
        <animated.button style={buttonAnimation} link="/resume">
          Tableau Resume
        </animated.button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
