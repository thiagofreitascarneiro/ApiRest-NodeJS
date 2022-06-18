import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Thiago',
      sobrenome: 'Carneiro',
      email: 'thiago@gmail.com',
      idade: 30,
      peso: 81,
      altura: 1.85,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
