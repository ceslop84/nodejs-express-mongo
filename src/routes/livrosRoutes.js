import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorTitulo);
routes.get("/livros/:id", LivroController.listarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.apagarLivro);
routes.post("/livros", LivroController.cadastrarLivro);

export default routes;
