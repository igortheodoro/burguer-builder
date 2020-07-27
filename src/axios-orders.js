import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-5d0bd.firebaseio.com/",
});

export default instance;
