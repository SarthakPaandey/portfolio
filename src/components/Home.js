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
  background: url("https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
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
  color: white;
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
  color: white;
  background-color: red; /* Changed default background color */
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Changed hover color */
  }

  &:nth-child(2) {
    background-color: #28a745; /* Changed second button color */
    &:hover {
      background-color: #218838; /* Changed hover color for second button */
    }
  }

  &:nth-child(3) {
    background-color: #dc3545; /* Changed third button color */
    &:hover {
      background-color: red; /* Changed hover color for third button */
    }
  }
  .ButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .Button img {
    max-width: 100px;
    height: auto;
    margin-right: 1rem;
  }

  &:nth-child(4) {
    background-color: #ffc107; /* Changed fourth button color */
    &:hover {
      background-color: #e0a800; /* Changed hover color for fourth button */
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
      <animated.h1 style={headerAnimation} className="cool-text">
        Sarthak Pandey
      </animated.h1>

      <Typewriter
        text={["Hello there! 👋", "😊 Welcome to my website!"]}
        typeSpeed={100}
        deleteSpeed={50}
        duration={1000}
      />

      <animated.h2 style={subHeaderAnimation} className="cool-text">
        Full Stack Developer & Designer
      </animated.h2>

      <ButtonContainer>
        <animated.button style={buttonAnimation}>
          <Link to="/about">More About Me 🤔</Link>
        </animated.button>
        <animated.button style={buttonAnimation}>
          <Link to="/education">Education 🤯</Link>
        </animated.button>
        <animated.button style={buttonAnimation}>
          <Link to="/work-experience">Work Experience 😳</Link>
        </animated.button>
        <animated.button style={buttonAnimation}>
          <Link to="/resume">Tableau Resume</Link>
        </animated.button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
