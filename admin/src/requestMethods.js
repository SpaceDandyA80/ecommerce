import axios from "axios";

const KEY = process.env.REACT_APP_SECRET_STRIPE_KEY;
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGIxYWE0NjcyZWM2YWUzODZkOGY5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzM2Mzg5MywiZXhwIjoxNjM3NjIzMDkzfQ.pJUgLn_77swJ5iFCEtd2vJlIq-zfxhRGwJlitSgkZiI";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  auth: { Authorization: `Bearer ${KEY}` },
  header: { token: `Bearer ${TOKEN}` },
});
