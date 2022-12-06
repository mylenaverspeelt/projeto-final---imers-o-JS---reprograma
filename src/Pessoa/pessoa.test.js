const Entregador = require('../Entregador/Entregador')
const Pessoa = require('./Pessoa')

describe('Testes da classe Pessoa', () => {
    test('Verifica se a instância de Pessoa é feita corretamente', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        expect(novaPessoa instanceof Pessoa).toBeTruthy()
    })
    test('Fazer uma instância com valores indefinidos', () => {
        expect(() => new Pessoa()).toThrow('Não é possível realizar uma instância com valores indefinidos')
      });
      test('Fazer uma instância com valores de tipo diferente do esperado', () => {
        expect(() => new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, 1)).toThrow('Não foi possível criar uma instância de Pessoa')
      });
    test('Verificar nome da pessoa', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        expect(novaPessoa.nomeCompleto).toBe('Maria das Dores')
    })
    test('Verificar idade da pessoa', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        expect(novaPessoa.idade).toBe(22)
    })
    test('Verificar data de nascimento', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        expect(novaPessoa.dataDeNascimento).toBe('31/08/2000')
    })
    test('Verificar id', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        expect(novaPessoa.id).toBe(10)
    })
    test('Verificar telefone para contato', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        expect(novaPessoa.telefone).toBe('4002-8922')
    })
})