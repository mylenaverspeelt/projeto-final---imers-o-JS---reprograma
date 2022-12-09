const Pessoa = require('../Pessoa/Pessoa')

class Paciente extends Pessoa {

    endereco
    medicacoesPorMes
    cartaoSUS

    constructor(pessoa, endereco, medicacoesPorMes, cartaoSUS) {
        super(pessoa.id, pessoa.nomeCompleto, pessoa.dataDeNascimento, pessoa.idade, pessoa.telefone, pessoa.cpf)
        if (!pessoa || !endereco || !medicacoesPorMes) {
            throw new Error('Não é possível instanciar com valores indefinidos')
        } else if (pessoa instanceof Pessoa && typeof endereco === 'string' && typeof medicacoesPorMes === 'object' && typeof cartaoSUS === 'string') {
            this.endereco = endereco
            this.medicacoesPorMes = medicacoesPorMes
            this.cartaoSUS = cartaoSUS
            this.constructor.listaPacientesCadastrados.push({ dadosPessoais: pessoa, endereco: this.endereco, medicacoesPorMes: this.medicacoesPorMes, cartaoSUS: this.cartaoSUS })
        }
        else {
            throw new Error('Não foi possível criar uma instância de Paciente')
        }
    }
    static listaPacientesCadastrados = []
}

module.exports = Paciente

