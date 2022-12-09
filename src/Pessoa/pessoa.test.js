const Pessoa = require('./Pessoa')

describe('Testes da classe Pessoa', () => {
    let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922', '9884025-51')
    test('Verifica se a instância de Pessoa é feita corretamente', () => {
        expect(novaPessoa instanceof Pessoa).toBeTruthy()
    })
    test('Fazer uma instância com valores indefinidos', () => {
        expect(() => new Pessoa()).toThrow('Não é possível realizar uma instância com valores indefinidos')
      });
      test('Fazer uma instância com tipos de dados diferente do esperado', () => {
        expect(() => new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, 1, '984504-51')).toThrow('Não foi possível criar uma instância de Pessoa')
      });
    test('Verificar nome', () => {
        expect(novaPessoa.nomeCompleto).toBe('Maria das Dores')
    })
    test('Verificar idade', () => {
        expect(novaPessoa.idade).toBe(22)
    })
    test('Verificar data de nascimento', () => {
        expect(novaPessoa.dataDeNascimento).toBe('31/08/2000')
    })
    test('Verificar id', () => {
        expect(novaPessoa.id).toBe(10)
    })
    test('Verificar telefone para contato', () => {
        expect(novaPessoa.telefone).toBe('4002-8922')
    })   
     test('Verificar cpf', () => {
        expect(novaPessoa.cpf).toBe('9884025-51')
    })
})