import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
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
      const listaLivro = await livro.findById(id);
      res.status(200).json(listaLivro);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição.` });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res
        .status(201)
        .json({ message: "Livro criado com sucesso.", livro: novoLivro });
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
}

export default LivroController;