const Pessoa = require('../Pessoa/Pessoa')

class Entregador extends Pessoa {
    tipoVeiculo
    numeroCadastro
    disponibilidade

    constructor(pessoa, tipoVeiculo, numeroCadastro, disponibilidade) {
        super(pessoa.id,  pessoa.nomeCompleto, pessoa.idade, pessoa.telefone)
        if (pessoa.idade >= 18) {
            if (pessoa instanceof Pessoa) {
                this.tipoVeiculo = tipoVeiculo
                this.numeroCadastro = numeroCadastro
                this.disponibilidade = disponibilidade
                this.constructor.listaEntregadoresCadastrados.push({dadosPessoais: pessoa, tipoVeiculo: this.tipoVeiculo, numeroCadastro: this.numeroCadastro, disponibilidade: this.disponibilidade })   
            }
        } else {
            console.error('Não foi possível criar uma instância de Entregador')
        }
    }

    static listaEntregadoresCadastrados = []    
}

module.exports = Entregador

