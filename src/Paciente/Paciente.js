const Pessoa = require('../Pessoa/Pessoa')

class Paciente extends Pessoa {

    endereco
    medicacoesPorMes 

    constructor(pessoa, endereco, medicacoesPorMes) {
        super(pessoa.id, pessoa.nomeCompleto, pessoa.idade,  pessoa.telefone)
        if (pessoa instanceof Pessoa) {
            this.endereco = endereco
            this.medicacoesPorMes = medicacoesPorMes
            this.constructor.listaPacientesCadastrados.push({ dadosPessoais: pessoa, endereco: this.endereco, medicacoesPorMes: this.medicacoesPorMes })
        } else {
            console.error('Não foi possível criar uma instância de Paciente')
        }
    }
    static listaPacientesCadastrados = []
}

module.exports = Paciente


