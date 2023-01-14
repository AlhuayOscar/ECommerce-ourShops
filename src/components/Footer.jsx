import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>OurShops</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex odit
          quae animi, accusamus suscipit illo totam non architecto recusandae
          nobis culpa? Modi repellendus eveniet minus minima obcaecati dolor
          quidem!
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook></Facebook>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram></Instagram>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter></Twitter>
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest></Pinterest>
            </SocialIcon>
          </SocialContainer>
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 164 Juan Ehlert , West Zárate
          Buenos Aires B2800
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +54 3487 477269
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          oscar_alhuay2001@hotmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
