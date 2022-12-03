class Pessoa {
    id
    nomeCompleto
    idade
    telefone
    dataDeNascimento
    constructor(id, nomeCompleto, dataDeNascimento, idade, telefone) {
        this.id = id
        this.nomeCompleto = nomeCompleto
        this.dataDeNascimento = dataDeNascimento
        this.idade = idade
        this.telefone = telefone
    }
}

module.exports = Pessoa