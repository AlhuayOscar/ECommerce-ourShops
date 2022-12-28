import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  background-color: #ffe5dc;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff7f7;

  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100w;
  height: 100vh;
`;
const Image = styled.img`
  height: 90%;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const TitlePlus = styled.b`
  font-size: 180px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>
              Spring SALE! <TitlePlus>Woah!</TitlePlus>
            </Title>
            <Desc></Desc>
            <Button>Get one now!</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>
              Spring SALE! <TitlePlus>Woah!</TitlePlus>
            </Title>
            <Desc></Desc>
            <Button>Get one now!</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>
              Winter SALE! <TitlePlus>Woah!</TitlePlus>
            </Title>
            <Desc></Desc>
            <Button>Get one now!</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>Our Most Popular Set!</Title>
            <Desc></Desc>
            <Button>Get one now!</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>
              Spring SALE! <TitlePlus>Woah!</TitlePlus>
            </Title>
            <Desc></Desc>
            <Button>Get one now!</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
