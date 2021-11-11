import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Payment,
  Phone,
  Pinterest,
  Room,
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
  margin: 20px 0;
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
  ${mobile({ backgroundColor: "#fcf2f2" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EVER</Logo>
        <Desc>EverMillion</Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>useful links</Title>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms of Service</ListItem>
          <ListItem>cart</ListItem>
          <ListItem>men's fashion</ListItem>
          <ListItem>women's fashion</ListItem>
          <ListItem>my account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>wish list</ListItem>
          <ListItem>accessories</ListItem>
          <ListItem>home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>contact us</Title>
        <ContactItem>
          <Room style={{ marginRight: "7px" }} />
          address
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "7px" }} /> phone number
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "7px" }} /> email
        </ContactItem>
        <ContactItem>
          <Payment style={{ marginRight: "7px" }} /> payment
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
