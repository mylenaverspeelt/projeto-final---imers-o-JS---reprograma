const Paciente = require('./Paciente')
const Pessoa = require('../Pessoa/Pessoa')

describe('Testes da classe Paciente', () => {
    let novaPessoa = new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922')
    let novoPaciente = new Paciente(novaPessoa, 'Rua das flores, 747 - Centro - Recife', { Zolpidem: 2, Dipirona: 2, AAS: 2 }, '988400053004')

    test('Verifica se a instância de Paciente é feita corretamente', () => {
        expect(novoPaciente instanceof Paciente).toBeTruthy()
    })
    test('Verifica o endereço', () => {
        expect(novoPaciente.endereco).toBe("Rua das flores, 747 - Centro - Recife")
    })
    test('Verifica as medicações por mês', () => {
        expect(novoPaciente.medicacoesPorMes).toStrictEqual({ Zolpidem: 2, Dipirona: 2, AAS: 2 })
    })
    test('Fazer uma instância com valores indefinidos', ()=>
    expect(() => new Paciente( new Pessoa(10, 'Maria das Dores', '31/08/2000', 22, '4002-8922'))).toThrow('Não é possível instanciar com valores indefinidos')
    )
})