import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1625237454823-da3f7461a353") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  margin: 20px;
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: #ff5a5f;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: black;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  // const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
//     connect(userFound)(Login);

//     //CONCISE ON PASSWORD AND USERNAME to auth
// try{

//   const res = await (
//     userFound === true) {
//     navigate("/");
//   }
// }catch(error){
//   console.log(error)
// }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>something went wrong</Error>}
          <Link>Forgot Password?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
