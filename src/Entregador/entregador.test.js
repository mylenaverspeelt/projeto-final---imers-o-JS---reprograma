const Entregador = require('./Entregador')
const Pessoa = require('../Pessoa/Pessoa')
const Paciente = require('../Paciente/Paciente')

describe('Testes da classe Entregador', () => {
    let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
    let novoEntregador = new Entregador(novaPessoa, 'carro', 989, true)

    test('Verifica se a instância de Entregador é feita corretamente', () => {
        expect(novoEntregador instanceof Entregador).toBeTruthy()
    })
    test('Verificar tipo do veículo', () => {
        expect(novoEntregador.tipoVeiculo).toBe('carro')
    })
    test('Verificar número de cadastro', () => {
        expect(novoEntregador.numeroCadastro).toBe(989)
    })
    test('Verificar disponibilidade', () => {
        expect(novoEntregador.disponibilidade).toBe(true)
    })
    test('Verificar se o condutor é maior de idade ', () => {
        expect(() => new Entregador(new Pessoa(1, 'Maria das Dores', '31/08/2000', 13, '4002-8922'), 'carro', 989, true)).toThrow('Motorista menor de idade. Não foi possível criar uma instância')
    })
// CONSERTAR TESTE
    test('Fazer uma instância com valores indefinidos', () => {
        expect(() => new Entregador(new Pessoa(1, 'Maria das Dores', '31/08/2000', 22, '4002-8922'), 'carro', 989)).toThrow('Não é possível instanciar com valores indefinidos')
    });
})

