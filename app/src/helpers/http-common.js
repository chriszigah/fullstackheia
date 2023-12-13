import axios from "axios";

const http = axios.create({
  baseURL: "https://heia-sms-api.vercel.app",
  withCredentials: true,
  headers: {
    "content-type": "application/json",
  },
});

export default http;
