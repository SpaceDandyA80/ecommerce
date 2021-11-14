import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGIxYWE0NjcyZWM2YWUzODZkOGY5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjc4NDU2MSwiZXhwIjoxNjM3MDQzNzYxfQ.7UrjCNnyPYSelbcZ7Nq4diRQ6jDK6mHaauKofywkT9M";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
