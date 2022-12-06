const Entregador = require('../Entregador/Entregador')
const Paciente = require('../Paciente/Paciente')
const Pessoa = require('../Pessoa/Pessoa')
const estoque = require('./estoque')

class Farmacia {
    nomeFantasia
    cnpj
    medicamentosEmEstoque

    static listaDeFarmacias = []

    constructor(nomeFantasia, cnpj) {
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.medicamentosEmEstoque = estoque
        this.constructor.listaDeFarmacias.push({nomeFantasia: nomeFantasia, cnpj: cnpj, estoque: this.medicamentosEmEstoque})
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


    fazerPedido(opa) {
        console.log(historicoDePedidos)
    }
}

module.exports = Farmacia

const farmaciaEstadual = new Farmacia('Farmácia do Estado de Pernambuco', '898565-50')
console.log(farmaciaEstadual.listaDeFarmacias)