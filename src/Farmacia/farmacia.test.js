const Farmacia = require('./Farmacia')
const Pessoa = require('../Pessoa/Pessoa')
const Paciente = require('../Paciente/Paciente')
const Entregador = require('../Entregador/Entregador')
const formatarData = require('../helpers')

describe('Testes da classe Farmácia', () => {
    let novafarmacia = new Farmacia('Farmácia Municipal de Caruaru', '94958762120')
    let joaquim = new Pessoa(3, 'Joaquim Cavalcanti da Silva', '31/03/1942', 80, '4002-8922')
    let marcos = new Pessoa(1, 'Marcos José Mendonça', '05/10/2004', 18, '4002-8922')
    let pacienteJoaquim = new Paciente(joaquim, 'Rua das flores, 747 - Centro - Recife', {
        Paracetamol: 2,
        Dipirona: 1,
        Dexametasona: 5
    })
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
    //AJEITAR TESTEEEEEEEEEE vvvvvvvvvvv
    test('Verifica se a nota fiscal é emitida com sucesso', () => {
        expect(novafarmacia.gerarNotaFiscal(formatarData(), pacienteJoaquim.nomeCompleto, pacienteJoaquim.medicacoesPorMes, entregadorMarcos.nomeCompleto)).toStrictEqual({"Entregador": "Marcos José Mendonça", "Medicamentos": {"Dexametasona": 5, "Dipirona": 1, "Paracetamol": 2}, "Paciente": "Joaquim Cavalcanti da Silva", "dataDoPedido": "08/12/2022"})
    })
    // test('Verifica se o número de pedido é gerado com sucesso', () => {
    //     expect(novafarmacia.gerarNumeroDePedido()).toBe('')
    // })
    test('Verifica se o entregador tem disponibilidade', () => {
        expect(() => new Farmacia('Farmácia Municipal de Caruaru', '94958762120').fazerPedido(new Paciente(new Pessoa(3, 'Joaquim Cavalcanti da Silva', '31/03/1942', 80, '4002-8922'), 'Rua das flores, 747 - Centro - Recife', {
            Paracetamol: 2,
            Dipirona: 1,
            Dexametasona: 5
        }), new Entregador(new Pessoa(4, 'Manuela Pereira Souza', '13/04/2001', 21, '4002-8922'), 'carro', 420, false))).toThrow('O entregador não encontra-se disponível no momento')
    })
    test('Verifica se Paciente é instância de Paciente', () => {
        expect(() => novafarmacia.fazerPedido(new Entregador(new Pessoa(4, 'Manuela Pereira Souza', '13/04/2001', 21, '4002-8922'), 'carro', 420, false), new Entregador(new Pessoa(1, 'Marcos José Mendonça', '05/10/2004', 18, '4002-8922'), 'moto', 898, true))).toThrow('Não foi possível realizar o seu pedido')
    })

    test('Verifica se Entregador é instância de Entregador', () => {
        expect(() => novafarmacia.fazerPedido(new Entregador(new Pessoa(4, 'Manuela Pereira Souza', '13/04/2001', 21, '4002-8922'), 'carro', 420, false), new Paciente(new Pessoa(3, 'Joaquim Cavalcanti da Silva', '31/03/1942', 80, '4002-8922'), 'Rua das flores, 747 - Centro - Recife', {
            Paracetamol: 2,
            Dipirona: 1,
            Dexametasona: 5
        })).toThrow('Não foi possível realizar o seu pedido')
        )
    })
    test('', () => {

    })

})