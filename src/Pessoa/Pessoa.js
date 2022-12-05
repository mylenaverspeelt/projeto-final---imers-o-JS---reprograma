class Pessoa {
    id
    nomeCompleto
    dataDeNascimento
    idade
    telefone


    constructor(id, nomeCompleto, dataDeNascimento, idade, telefone) {
       if (typeof id === 'number' && typeof nomeCompleto === 'string' && typeof dataDeNascimento === 'string' && typeof idade === 'number' && typeof telefone === 'string') {
            this.id = id
            this.nomeCompleto = nomeCompleto
            this.dataDeNascimento = dataDeNascimento
            this.idade = idade
            this.telefone = telefone
        } else {
            // throw new Error('Não foi possível criar uma instância de Pessoa')
        }
    }
}


module.exports = Pessoa

