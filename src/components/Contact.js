// src/components/Contact.js
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ContactHeader = styled.h1`
  color: #5e3c96;
`;

const ContactSubText = styled.p`
  font-size: 1.2rem;
  color: #333;
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
  return (
    <ContactContainer>
      <ContactHeader>CONTACT ME</ContactHeader>
      <ContactSubText>
        You can find me anywhere if you contact me using my social media, most
        of the time I'm available there.
      </ContactSubText>
      <ContactSubText>OR USE THE FORM BELOW TO GET IN TOUCH :</ContactSubText>
      <Form>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email address" required />
        <Textarea placeholder="Message" required></Textarea>
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
