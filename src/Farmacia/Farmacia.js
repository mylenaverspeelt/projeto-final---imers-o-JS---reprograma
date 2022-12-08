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

    constructor(nomeFantasia, cnpj) {
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.estoque = estoque
        this.constructor.listaDeFarmacias.push({ nomeFantasia: nomeFantasia, cnpj: cnpj, estoque: this.estoque })
    }

        // let estoqueFiltrado = estoque.forEach(item => item)
        // let medicacoesFiltradas = medicacoesPorMes.forEach(item => item)

        // console.log(estoqueFiltrado);
        // console.log(medicacoesFiltradas);

        // for (var i = 0; i < estoque.length; i++) {
        //     if (estoque[i].AAS == 0) {
        //         return 'AAS fora de estoque'
        //     } else if (estoque[i].Ciprofloxaxino == 0) {
        //         return 'Ciprofloxaxino fora de estoque'
        //     } else if (estoque[i].Dexametasona == 0) {
        //         return 'Dexametasona fora de estoque'
        //     } else if (estoque[i].Paracetamol == 0) {
        //         return 'Paracetamol fora de estoque'
        //     } else if (estoque[i].Dipirona == 0) {
        //         return 'Dipirona fora de estoque'
        //     } else if (estoque[i].Zolpidem == 0) {
        //         return 'Zolpidem fora de estoque'
        //     }
        // }

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

    // retornarNomesMedicamentos(medicacoesPorMes) {
    //     for (var i = 0; i < medicacoesPorMes.length; i++) {
    //         let listaDosNomes = []
    //         if (medicacoesPorMes[i].AAS) {
    //             listaDosNomes.push('AAS')
    //         } else if (medicacoesPorMes[i].Ciprofloxaxino) {
    //             listaDosNomes.push('Ciprofloxaxino')
    //         } else if (medicacoesPorMes[i].Dexametasona) {
    //             listaDosNomes.push('Dexametasona')
    //         } else if (medicacoesPorMes[i].Paracetamol) {
    //             listaDosNomes.push('Paracetamol')
    //         } else if (medicacoesPorMes[i].Dipirona) {
    //             listaDosNomes.push('Dipirona')
    //         } else if (medicacoesPorMes[i].Zolpidem) {
    //             listaDosNomes.push('Zolpidem')
    //         }
    //       return listaDosNomes
    //     }
    // }


    fazerPedido(destinatario, entregador) {

        let historicoDePedidos = []
        let listaMedicamentos = destinatario.medicacoesPorMes

        if (destinatario instanceof Paciente && entregador instanceof Entregador) {
            if (entregador.disponibilidade !== false) {
                if (estoque.Dexametasona > 0 || estoque.Dipirona > 0 || estoque.Zolpidem > 0) {
                    estoque.Dipirona -= listaMedicamentos.Dipirona
                    estoque.Paracetamol -= listaMedicamentos.Paracetamol
                    estoque.Dexametasona -= listaMedicamentos.Dexametasona

                    historicoDePedidos.push({ data: formatarData(), numeroDoPedido: this.gerarNumeroDePedido(), remetente: this.nomeFantasia, pedido: listaMedicamentos, destinatario: destinatario.nomeCompleto, enderecoDeEntrega: destinatario.endereco, entregador: entregador.nomeCompleto, notaFiscal: this.gerarNotaFiscal(formatarData(), destinatario.nomeCompleto, listaMedicamentos, entregador.nomeCompleto) })
                    console.log(historicoDePedidos);

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

const listaDeMedicamentosJoaquim = {
    Paracetamol: 2,
    Dipirona: 1,
    Dexametasona: 5
}

const pacienteJoaquim = new Paciente(joaquim, 'Rua das flores, 747 - Centro - Recife', listaDeMedicamentosJoaquim)
const entregadorMarcos = new Entregador(marcos, 'moto', 898, true)

const farmaciaEstadual = new Farmacia('Farmácia do Estado de Pernambuco', '898565-50')

console.log(farmaciaEstadual.fazerPedido(pacienteJoaquim, entregadorMarcos));
