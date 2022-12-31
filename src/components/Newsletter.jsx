import { Send } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: Teal;
  color: white;
  padding: 0px;
  font-size: 20px;
  cursor: pointer;
  scale:1.05
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Updates from your best customes ❤️!</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send></Send>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;