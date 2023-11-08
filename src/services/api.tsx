import axios from "axios";

const api: any = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default api;
