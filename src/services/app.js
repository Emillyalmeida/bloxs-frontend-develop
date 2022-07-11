import axios from "axios";

const app = axios.create({
  baseURL: "https://conteudos.bloxs.com.br/wp-json/wp/v2/posts",
});

export default app;
