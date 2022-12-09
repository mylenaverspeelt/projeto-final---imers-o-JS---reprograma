const Pessoa = require('../Pessoa/Pessoa')

class Entregador extends Pessoa {
    tipoVeiculo
    numeroCadastro
    disponibilidade

    constructor(pessoa, tipoVeiculo, numeroCadastro, disponibilidade) {
        super(pessoa.id, pessoa.nomeCompleto, pessoa.dataDeNascimento, pessoa.idade, pessoa.telefone, pessoa.cpf)
        if (!pessoa || !tipoVeiculo || !numeroCadastro || !disponibilidade) {
            throw new Error('Não é possível instanciar com valores indefinidos')
        } else if (pessoa instanceof Pessoa && typeof tipoVeiculo === 'string' && typeof numeroCadastro === 'number' && typeof disponibilidade === 'boolean') {
            if (pessoa.idade >= 18) {
                this.tipoVeiculo = tipoVeiculo
                this.numeroCadastro = numeroCadastro
                this.disponibilidade = disponibilidade
                this.constructor.listaEntregadoresCadastrados.push({dadosPessoais: pessoa, tipoVeiculo: this.tipoVeiculo, numeroCadastro: this.numeroCadastro, disponibilidade: this.disponibilidade})
            } else {
                throw new Error('Motorista menor de idade. Não foi possível criar uma instância')
            }
        } else {
            throw new Error('Não foi possível criar uma instância de Entregador')
        }
    }
    static listaEntregadoresCadastrados = []
}
module.exports = Entregador

