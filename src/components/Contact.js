import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

// ... other components ...

const ContactContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: url(https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?t=st=1717324041~exp=1717327641~hmac=0a72e15677c97e8f0727700b9a21cd4886051b772619c54b8c5116f23bfeb934&w=2000);
  background-size: cover;
  background-position: center;
`;

const ContactHeader = styled.h1`
  color: #5e3c96;
  shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactSubText = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-top: 1rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 100px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background: #5e3c96;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #472b72;
  }
`;

const Contact = () => {
  const animationProps = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(100px)" },
    config: { duration: 1000, yoyo: true },
  });

  return (
    <ContactContainer>
      <ContactHeader>CONTACT ME</ContactHeader>
      <ContactSubText style={animationProps}>
        You can find me anywhere if you contact me using my social media, most
        of the time I'm available there.
        <ContactSubText style={animationProps}>
          You can find me anywhere if you contact me using my social media, most
          of the time I'm available there.
        </ContactSubText>
      </ContactSubText>
      <ContactSubText style={animationProps}>
        OR USE THE FORM BELOW TO GET IN TOUCH :
      </ContactSubText>
      <Form>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email address" required />
        <Textarea placeholder="Message" required></Textarea>
        <Button type="submit">Send</Button>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="https://github.com/your-github-username" target="_blank">
            GitHub
          </a>
          |
          <a
            href="https://www.instagram.com/your-instagram-username"
            target="_blank"
          >
            Instagram
          </a>
          |
          <a href="https://your-website.com" target="_blank">
            Website
          </a>
        </div>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
