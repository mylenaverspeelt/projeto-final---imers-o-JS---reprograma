const Entregador = require('./Entregador')
const Pessoa = require('../Pessoa/Pessoa')
describe('Testes da classe Entregador', () => {
    test('Verifica se a instância de Entregador é feita corretamente', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        let novoEntregador = new Entregador(novaPessoa, 'carro', 989, true)
        expect(novoEntregador instanceof Entregador).toBeTruthy()
    })
    test('Verificar tipo do veículo', () => {
        let novaPessoa = new Pessoa(1, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        let novoEntregador = new Entregador(novaPessoa, 'carro', 989, true)
        expect(novoEntregador.tipoVeiculo).toBe('carro')
    })
    test('Verificar número de cadastro', () => {
        let novaPessoa = new Pessoa(1, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        let novoEntregador = new Entregador(novaPessoa, 'carro', 989, true)
        expect(novoEntregador.numeroCadastro).toBe(989)
    })
    test('Verificar disponibilidade', () => {
        let novaPessoa = new Pessoa(1, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        let novoEntregador = new Entregador(novaPessoa, 'carro', 989, true)
        expect(novoEntregador.disponibilidade).toBe(true)
    })
    // test('Verificar se o condutor é maior de idade ', () => {
    //     let novaPessoa = new Pessoa(1, 'Maria das Dores', '31/08/2000', 13, '4002-8922')
    //     let novoEntregador = new Entregador(novaPessoa, 'carro', 989, true)
    //     expect(() => novoEntregador).toThrow('')
    // })
    // test('Teste com valores indefinidos', () => {
    //     let novaPessoa = new Pessoa(1, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
    //     let novoEntregador = new Entregador(novaPessoa, 'carro', 989, true)
    //     expect(novoEntregador).toBe('')
    // })
    // test('Teste com pessoa sem ser instância de Pessoa', () => {

    // })
})