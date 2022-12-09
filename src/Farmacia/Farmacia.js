const Entregador = require('../Entregador/Entregador')
const Paciente = require('../Paciente/Paciente')
const estoque = require('./estoque')
const formatarData = require('../helpers')

class Farmacia {
    nomeFantasia
    cnpj
    estoque

    static listaDeFarmacias = []

    static historicoDePedidos(data, numeroDePedido, remetente, pedido, destinatario, endereco, entregador, notaFiscal) {
        let listagem = []
        listagem.push({ data: data, numeroDoPedido: numeroDePedido, remetente: remetente, pedido: pedido, destinatario: destinatario, enderecoDeEntrega: endereco, entregador: entregador, notaFiscal: notaFiscal })
        console.log(listagem)
        return listagem

    }

    constructor(nomeFantasia, cnpj) {
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.estoque = estoque
        this.constructor.listaDeFarmacias.push({ nomeFantasia: nomeFantasia, cnpj: cnpj, estoque: this.estoque })
    }

    gerarNumeroDePedido() {
        let numeroDePedido = Math.floor(Math.random() * 1000);
        return numeroDePedido
    }

    gerarNotaFiscal(data, destinatario, listaMedicamentos, entregador) {
        // console.table(notaFiscal)
        return {
            dataDoPedido: data,
            Paciente: destinatario,
            Medicamentos: listaMedicamentos,
            Entregador: entregador,
        }

    }

    fazerPedido(destinatario, entregador) {
        let listaMedicamentos = destinatario.medicacoesPorMes
        // console.log(estoque);
        if (destinatario instanceof Paciente && entregador instanceof Entregador) {
            if (entregador.disponibilidade !== false) {
                if (destinatario.medicacoesPorMes.Dipirona > 0) {
                    estoque.Dipirona -= listaMedicamentos.Dipirona
                }
                if (destinatario.medicacoesPorMes.Paracetamol > 0) {
                    estoque.Paracetamol -= listaMedicamentos.Paracetamol
                }
                if (destinatario.medicacoesPorMes.Dexametasona > 0) {
                    estoque.Dexametasona -= listaMedicamentos.Dexametasona
                }
                if (destinatario.medicacoesPorMes.AAS > 0) {
                    estoque.AAS -= listaMedicamentos.AAS
                }
                // console.log(estoque);
                let gerarNota = this.gerarNotaFiscal(formatarData(), destinatario.nomeCompleto, listaMedicamentos, entregador.nomeCompleto)

                Farmacia.historicoDePedidos(formatarData(), this.gerarNumeroDePedido(), this.nomeFantasia, listaMedicamentos, destinatario.nomeCompleto, destinatario.endereco, entregador.nomeCompleto, gerarNota)

                return 'O pedido foi realizado com sucesso!'
            } else {
                throw new Error('O entregador não encontra-se disponível no momento')
            }
        } else {
            throw new Error('Não foi possível realizar o seu pedido')
        }
    }
}

module.exports = Farmacia
