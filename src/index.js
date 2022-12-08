const Pessoa = require('./Pessoa/Pessoa')
const Paciente = require('./Paciente/Paciente')
const Entregador = require('./Entregador/Entregador')
const Farmacia = require('./Farmacia/Farmacia')

// PESSOAS
const joaquim = new Pessoa(3, 'Joaquim Cavalcanti da Silva', '31/03/1942', 80, '6985-8922')
const marcos = new Pessoa(1, 'Marcos José Mendonça', '05/10/2004', 18, '4002-8672')
const lucia = new Pessoa(2, 'Lucia Maria dos Santos', '22/08/1972', 50, '6127-8900')
const manuela = new Pessoa(4, 'Manuela Pereira Souza', '13/04/2001', 21, '4692-8420')

// PACIENTES
const pacienteJoaquim = new Paciente(joaquim, 'Rua das flores, 747 - Centro - Caruaru', {
    Paracetamol: 2,
    Dipirona: 1,
    Dexametasona: 5
})
const pacienteLucia = new Paciente(lucia, 'Rua Tancredo Neves, 21 - Salgado - Caruaru',  {
    Paracetamol: 1,
    Dipirona: 4,
    AAS: 2
})

// ENTREGADORES
const entregadorMarcos = new Entregador(marcos, 'moto', 898, true)
const entregadoraManuela = new Entregador(manuela, 'carro', 420, false)

// FARMÁCIAS
const farmaciaEstadual = new Farmacia('Farmácia do Estado de Pernambuco', '898565-50')
const farmaciaMunicipal = new Farmacia('Farmácia da Prefeitura de Caruaru', '8446164-65')



console.log(farmaciaEstadual.fazerPedido(pacienteJoaquim, entregadorMarcos));
console.log(farmaciaEstadual.fazerPedido(pacienteLucia, entregadorMarcos));

