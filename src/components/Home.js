import React from "react";
import styled from "styled-components";
import Typewriter from "./Typing";
import { Link } from "react-router-dom";
import Tile from "./Tile";

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #5e3c96;
  margin-top: 2rem;
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  color: #6d6d6d;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
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

  &:nth-child(4) {
    background-color: #b39ddb;
    &:hover {
      background-color: #9575cd;
    }
  }
`;

// ... other code

const Home = () => {
  return (
    <HomeContainer>
      <ul className="NavBar">
        <li className="Navitem">
          <Link to="/">Home</Link>
        </li>
        <li className="Navitem">
          <Link to="/about">About</Link>
        </li>
        <li className="Navitem">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="Navitem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Header>Sarthak Pandey</Header>
      <img
        src="https://cdn.medicalfuturist.com/wp-content/uploads/2016/09/original.jpg"
        alt="background"
        style={{ width: "100%", height: "auto" }}
      />
      <Typewriter
        text={["Hello there!", "Welcome to my website!"]}
        typeSpeed={100}
        deleteSpeed={50}
        duration={1000}
      />
      <Typewriter
        text={[
          "I am a developer and a designer. I have experience in HTML, CSS, and JavaScript.",
        ]}
        typeSpeed={100}
        deleteSpeed={50}
        duration={1000}
      />

      <Tile
        header="Sarthak Pandey"
        subheader="About Me"
        img=" man working on laptop"
        text="I am a developer and a designer. I have experience in HTML, CSS, and JavaScript."
        link="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"
        linkText="More About Me"
      />
      <ButtonContainer>
        <Button>More About Me</Button>
        <Button>Education</Button>
        <Button>Work Experience</Button>
        <Button>Tableau Resume</Button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
