import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ padding: "5px" })};
`;

const Announcement = () => {
  return (
    <Container>Your Super deal! Free Shipping On Orders Over $100 :D</Container>
  );
};
export default Announcement;
