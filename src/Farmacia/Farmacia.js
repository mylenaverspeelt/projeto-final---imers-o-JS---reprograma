const Entregador = require('../Entregador/Entregador')
const Paciente = require('../Paciente/Paciente')
const Pessoa = require('../Pessoa/Pessoa')
const estoque = require('./estoque')

class Farmacia {
    nomeFantasia
    cnpj
    medicamentosEmEstoque


    constructor(nomeFantasia, cnpj) {
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.medicamentosEmEstoque = estoque
    }

    verificarEstoque() {
        let opcoesDisponiveis = estoque.map(item => item)
        return opcoesDisponiveis
    }

    gerarNumeroDePedido() {
        let numeroDePedido = Math.floor(Math.random() * 1000);
        return numeroDePedido

    }

    gerarNotaFiscal() {
        //codigo
    }


    fazerPedido() {
        //codigo
    }
}

module.exports = Farmacia

