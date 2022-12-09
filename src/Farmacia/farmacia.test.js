const Farmacia = require('./Farmacia')
const Pessoa = require('../Pessoa/Pessoa')
const Paciente = require('../Paciente/Paciente')
const Entregador = require('../Entregador/Entregador')
const formatarData = require('../helpers')


describe('Testes da classe Farmácia', () => {
    let novafarmacia = new Farmacia('Farmácia Municipal de Caruaru', '94958762120')
    let novafarmacia2 = new Farmacia('Farmácia do Estado de Pernambuco', '898565-50')
    let joaquim = new Pessoa(3, 'Joaquim Cavalcanti da Silva', '31/03/1942', 80, '4002-8922', '565666-80')
    let marcos = new Pessoa(1, 'Marcos José Mendonça', '05/10/2004', 18, '4002-8922', '5654654-90')
    let pacienteJoaquim = new Paciente(joaquim, 'Rua das flores, 747 - Centro - Recife', {
        Paracetamol: 2,
        Dipirona: 1,
        Dexametasona: 5
    }, '65650004848000')
    let entregadorMarcos = new Entregador(marcos, 'moto', 898, true)

    test('Verifica se a instância de Farmácia é feita corretamente', () => {
        expect(novafarmacia instanceof Farmacia).toBeTruthy()
    })
    test('Verifica o nome da farmácia', () => {
        expect(novafarmacia.nomeFantasia).toBe('Farmácia Municipal de Caruaru')
    })
    test('Verifica o cnpj da farmácia', () => {
        expect(novafarmacia.cnpj).toBe('94958762120')
    })
    test('Verifica se o pedido é realizado com sucesso sucesso', () => {
        expect(novafarmacia.fazerPedido(pacienteJoaquim, entregadorMarcos)).toBe('O pedido foi realizado com sucesso!')
    })
    test('Verifica se a nota fiscal é emitida com sucesso', () => {
        expect(novafarmacia.gerarNotaFiscal(formatarData(), pacienteJoaquim.nomeCompleto, pacienteJoaquim.medicacoesPorMes, entregadorMarcos.nomeCompleto)).toStrictEqual({ "Entregador": "Marcos José Mendonça", "Medicamentos": { "Dexametasona": 5, "Dipirona": 1, "Paracetamol": 2 }, "Paciente": "Joaquim Cavalcanti da Silva", "dataDoPedido": formatarData() })
    })
    test('Verifica se o entregador tem disponibilidade', () => {
        expect(entregadorMarcos.disponibilidade).toBe(true)
    })
    test('Verifica se Paciente é instância de Paciente', () => {
        expect(() => new Farmacia('Farmácia Municipal de Caruaru', '94958762120').fazerPedido(new Pessoa(1, 'Maria da Silva', '31/03/1997', 55, '9898-8569', '1045789-20'), new Entregador(new Pessoa(1, 'Maria da Silva', '31/03/1997', 55, '9898-8569', '1045789-20'), 'carro', 565, true))).toThrow('Não foi possível realizar o seu pedido')
    })
    test('Verifica se Entregador é instância de Entregador', () => {
        expect(() => new Farmacia('Farmácia Municipal de Caruaru', '94958762120').fazerPedido(new Paciente(new Pessoa(1, 'Maria da Silva', '31/03/1997', 55, '9898-8569', '1045789-20'), 'Rua das graças - Centro - Caruaru', { "Dexametasona": 5, "Dipirona": 1 }, '988910045454000'), new Pessoa(1, 'Maria da Silva', '31/03/1997', 55, '9898-8569', '1045789-20'))).toThrow('Não foi possível realizar o seu pedido')
    })
    test('Verifica se o estoque está diminuindo após a realização de um pedido', () => {
        novafarmacia.fazerPedido(pacienteJoaquim, entregadorMarcos)
        expect(novafarmacia.estoque).toStrictEqual({"AAS": 100, "Dexametasona": 90, "Dipirona": 98, "Paracetamol": 96})
    })
})