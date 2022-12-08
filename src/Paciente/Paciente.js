const Pessoa = require('../Pessoa/Pessoa')

class Paciente extends Pessoa {

    endereco
    medicacoesPorMes 

    constructor(pessoa, endereco, medicacoesPorMes) {
        super(pessoa.id, pessoa.nomeCompleto, pessoa.dataDeNascimento, pessoa.idade, pessoa.telefone)
        if (pessoa instanceof Pessoa) {
            this.endereco = endereco
            this.medicacoesPorMes = medicacoesPorMes
            this.constructor.listaPacientesCadastrados.push({ dadosPessoais: pessoa, endereco: this.endereco, medicacoesPorMes: this.medicacoesPorMes })
        }
        else {
            throw new Error('Não foi possível criar uma instância de Paciente')
        }

        if(!pessoa || !endereco || !medicacoesPorMes){
            throw new Error('Não é possível instanciar com valores indefinidos')
        }

    }
    static listaPacientesCadastrados = []
}

module.exports = Paciente


