import express from "express";
import conectaBancoDados from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaBancoDados();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso.");
});

const app = express();
routes(app);

export default app;
