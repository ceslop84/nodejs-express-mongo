import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({}); // embedding
      //const listaLivros = await livro.find({}).populate("autor").exec(); // referencing
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição.` });
    }
  }

  static async listarLivro(req, res) {
    try {
      const id = req.params.id;
      const listaLivro = await livro.findById(id); // embedding
      //const listaLivros = await livro.findById(id).populate("autor").exec(); // referencing
      res.status(200).json(listaLivro);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição.` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const novoLivroCompleto = await livro.create({
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      });
      res.status(201).json({
        message: "Livro criado com sucesso.",
        livro: novoLivroCompleto,
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso." });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição.` });
    }
  }

  static async apagarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro apagado com sucesso." });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição.` });
    }
  }

  static async listarLivrosPorTitulo(req, res) {
    const titulo = req.query.titulo;
    try {
      const livrosPorTitulo = await livro.find({ titulo: titulo });
      res.status(200).json(livrosPorTitulo);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca.` });
    }
  }
}

export default LivroController;
