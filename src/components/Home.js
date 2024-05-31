import React from "react";
import styled from "styled-components";
import Typewriter from "./Typing";

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

const Home = () => {
  return (
    <HomeContainer>
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
