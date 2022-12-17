import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

// API.interceptors.request.use((req) => {
//   if (token) {
//     req.headers.Authorization = token;
//   }

//   return req;
// });

export const predictChat = (message) => {
  const msg = JSON.stringify({ message });

  return API.post("/predict", msg, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const speechRecognition = (message) => {
  const msg = JSON.stringify({ message });

  return API.post("/record", msg, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
