class Pessoa {
    id
    nomeCompleto
    dataDeNascimento
    idade
    telefone
    #cpf


    constructor(id, nomeCompleto, dataDeNascimento, idade, telefone, cpf) {

        if (!id || !nomeCompleto || !dataDeNascimento || !idade || !telefone) {
            throw new Error('Não é possível realizar uma instância com valores indefinidos')
        } else if (typeof id === 'number' && typeof nomeCompleto === 'string' && typeof dataDeNascimento === 'string' && typeof idade === 'number' && typeof telefone === 'string' && typeof cpf === 'string') {
            this.id = id
            this.nomeCompleto = nomeCompleto
            this.dataDeNascimento = dataDeNascimento
            this.idade = idade
            this.telefone = telefone
            this.#cpf = cpf
        } else {
            throw new Error('Não foi possível criar uma instância de Pessoa')
        }
    }

    set cpf(cpf) {
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf

    }

}


module.exports = Pessoa

