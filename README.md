
# Aplicativo Remédio em Casa 💊🚑

### 💻 Proposta
Projeto Conclusão do Curso: Turma 21 - Imersão JavaScript {Reprograma} | Dezembro 2022 | Autora:<a target='_blank' href="https://www.linkedin.com/in/mylenaverspeelt/">Mylena Verspeelt</a>

### 💻 Descrição do Projeto

O projeto foi pensado para facilitar a entrega de medicamentos de uso recorrente mensal para pacientes cadastrados na rede estadual de farmácias. 
O usuário em foco são pacientes acamados, idosos, com alguma limitação de mobilidade, moradores da zona rural ou com alguma outra condição especial.
O aplicativo faz uma conexão entre o Paciente, a Farmácia e os Entregadores.


### 💡 Features

- Realiza o cadastro de novas Pessoas que podem ser Pacientes ou Entregadores
- Realiza o cadastro de novas unidades de farmácias
- Verifica o estoque da farmácia e atualiza o valor do mesmo após a realização de um pedido
- Quando o pedido é concluido uma nota fiscal é gerada
- Métodos estáticos em todas as classes que permitem ver quais instâncias foram criadas a partir delas.
- Testes de caminhos felizes e infelizes de todas as classes


### 🛠️ Tecnologias Utilizadas

- [Javascript](https://www.javascript.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Git/Github](https://github.com/)
- [Npm](https://www.npmjs.com/)
 

### ⚙️ Rode o projeto localmente!

- É necessário que você tenha instalado na sua maquina o [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) e uma IDE da sua preferência, eu utilizei o [VSCode](https://code.visualstudio.com/).

- Tanto o projeto como os testes rodam no próprio terminal da IDE, basta utilizar os comandos abaixo:

|                    Passo			               |       Comando	    |
| ------------------------------------------------ | ------------------ |
| Forkar o repositório				               | `fork tool`        |
| Clonar o repositório                             | `git clone`        |
| Instalar as dependencias                         | `npm install`      |
| Rodar o projeto                                  | `npm start`        |
| Rodar os testes 				                   |`npm run test`      |


### 🛠️ Evolução do projeto
Visando melhorias futuras, mapeei alguns pontos que podem ser aplicados:
- Fazer verificação dos dados de telefone, data de nascimento, endereço e cnpj com regex
- Verificar se já foi realizado um pedido com aquela numeração que foi gerada / Mudar o método de geração de número de pedido
- Calcular a idade a partir da data de nascimento fornecida
- Checar quando o estoque estiver zerado
- Instalar o typescript pra garantir as tipagens dos dados

