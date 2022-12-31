import styled, { keyframes } from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const ImgAnimation = keyframes`
      0%,
      100% {
        box-shadow: 2px 2px rgba(255, 0, 0, 0.5);
      }
      86% {
        box-shadow: 2px 2px rgba(252, 255, 0, 0.5);
      }
      72% {
        box-shadow: 2px 2px rgba(135, 255, 0, 0.5);
      }
      58% {
        box-shadow: 2px 2px rgba(0, 255, 237, 0.5);
      }
      44% {
        box-shadow: 2px 2px rgba(35, 0, 255, 0.5);
      }
      30% {
        box-shadow: 2px 2px rgba(205, 0, 255, 0.5);
      }
      2% {
        box-shadow: 2px 2px rgba(255, 0, 162, 0.5);
      }
`;
const Image = styled.img`
  width: 100%;
  height: 35vw;
  object-fit: cover;
  animation: ${ImgAnimation} 6s infinite;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.15);
  }
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-shadow: 1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000,
    1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 5px 5px black;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.15);
  }
`;
// on hover for button: box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Embrace FASHION</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
