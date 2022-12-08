const Entregador = require('../Entregador/Entregador')
const Paciente = require('../Paciente/Paciente')
const Pessoa = require('../Pessoa/Pessoa')
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
        let notaFiscal = {
            dataDoPedido: `${data}`,
            Paciente: `${destinatario}`,
            Medicamentos: `${listaMedicamentos}`,
            Entregador: `${entregador}`,
        }
        // console.table(notaFiscal)
        return notaFiscal
    }

    fazerPedido(destinatario, entregador) {

        let listaMedicamentos = destinatario.medicacoesPorMes
        // console.log(estoque);
        if (destinatario instanceof Paciente && entregador instanceof Entregador) {
            if (entregador.disponibilidade !== false) {
                if (estoque.Dexametasona > 0 || estoque.Dipirona > 0 || estoque.Zolpidem > 0) {
                    estoque.Dipirona -= listaMedicamentos.Dipirona
                    estoque.Paracetamol -= listaMedicamentos.Paracetamol
                    estoque.Dexametasona -= listaMedicamentos.Dexametasona
                    // console.log(estoque)
                    let gerarNota = this.gerarNotaFiscal(formatarData(), destinatario.nomeCompleto, listaMedicamentos, entregador.nomeCompleto)

                    Farmacia.historicoDePedidos(formatarData(), this.gerarNumeroDePedido(), this.nomeFantasia, listaMedicamentos, destinatario.nomeCompleto, destinatario.endereco, entregador.nomeCompleto, gerarNota)

                    return 'O pedido foi realizado com sucesso!'
                }
            } else {
                throw new Error('O entregador não encontra-se disponível no momento')
            }
        } else {
            throw new Error('Não foi possível realizar o seu pedido')
        }

    }

}


module.exports = Farmacia

const joaquim = new Pessoa(3, 'Joaquim Cavalcanti da Silva', '31/03/1942', 80, '4002-8922')
const marcos = new Pessoa(1, 'Marcos José Mendonça', '05/10/2004', 18, '4002-8922')
const manuela = new Pessoa(4, 'Manuela Pereira Souza', '13/04/2001', 21, '4002-8922')



const pacienteJoaquim = new Paciente(joaquim, 'Rua das flores, 747 - Centro - Recife', {
    Paracetamol: 2,
    Dipirona: 1,
    Dexametasona: 5
})
const entregadorMarcos = new Entregador(marcos, 'moto', 898, true)
const entregadoraManuela = new Entregador(manuela, 'carro', 420, false)

const farmaciaEstadual = new Farmacia('Farmácia do Estado de Pernambuco', '898565-50')

console.log(farmaciaEstadual.fazerPedido(pacienteJoaquim, entregadorMarcos));
