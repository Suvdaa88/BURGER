import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-9356b-default-rtdb.firebaseio.com/"
});

export default instance;
