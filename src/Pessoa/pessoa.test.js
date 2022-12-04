const Pessoa = require('./Pessoa')

describe('Testes da classe Pessoa', () => {
    test('Fazer uma instância da classe Pessoa com sucesso', () => {
        let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
        expect(novaPessoa).toEqual({ "dataDeNascimento": "31/08/2000", "id": 10, "idade": 22, "nomeCompleto": "Maria das Dores", "telefone": "4002-8922" })
    })
    // test('Fazer uma instância da classe Pessoa sem sucesso', () => {
    //     let novaPessoa = new Pessoa(1)
    //     expect(() => (novaPessoa)).toThrow('nao foi')
    // })
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