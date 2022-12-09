
# Aplicativo Remédio em Casa 💊🚑

<div align='center'>
<img src="./public/images/logo.png" alt='Remédio em Casa Logomarca'/>
</div>

### ✔️ Proposta
Projeto Conclusão do Curso: Turma 21 - Imersão JavaScript {Reprograma} | Dezembro 2022 | Autora:<a target='_blank' href="https://www.linkedin.com/in/mylenaverspeelt/"> Mylena Verspeelt</a>

### 💻 Descrição do Projeto

O projeto foi pensado para intermediar a entrega de medicamentos de uso recorrente mensal para pacientes cadastrados na rede estadual de farmácias. O objetivo principal é descentralizar e facilitar o acesso da população aos medicamentos.
Os usuários em foco são pacientes acamados, idosos, com alguma limitação de mobilidade, moradores da zona rural ou com alguma outra condição especial.
O aplicativo faz uma conexão entre o Paciente, a Farmácia e os Entregadores.



### 💡 Features

- Verifica se todos os parâmetros recebidos na hora da instância são dos tipos esperados ou se são indefinidos
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
 

### ⚙️ Rode o projeto localmente

- É necessário que você tenha instalado na sua maquina o [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) e uma IDE da sua preferência, eu utilizei o [VSCode](https://code.visualstudio.com/).

- Tanto o projeto como os testes rodam no próprio terminal da IDE, basta utilizar os comandos abaixo:

<div align='center'>

|                    Passo			               |       Comando	    |
| ------------------------------------------------ | ------------------ |
| Forkar o repositório				               | `fork tool`        |
| Clonar o repositório                             | `git clone`        |
| Instalar as dependencias                         | `npm install`      |
| Rodar o projeto                                  | `npm start`        |
| Rodar os testes 				                   |`npm run test`      |

</div>
- Como sugestão pessoal, sugiro adicionar a extensão 'Jest Runner' (no VSCode) para facilitar na hora de rodar os testes.

### 🚀 Evolução do projeto
Visando melhorias futuras, mapeei alguns pontos que podem ser aplicados:
- Fazer verificação dos dados de telefone, data de nascimento, endereço e cnpj com regex
- Verificar se já foi realizado um pedido com aquela numeração que foi gerada / Mudar o método de geração de número de pedido
- Calcular a idade a partir da data de nascimento fornecida
- Checar quando o estoque estiver zerado
- Instalar o typescript pra garantir as tipagens dos dados

### 😄 Boas notícias 

- Em Abril/2022 o município de Caruaru disponibilizou um veículo adaptado que funciona como uma farmácia intinerante, para entrega de medicamentos, assistência farmacêutica e dispensamento de medicações, para a população que reside em bairros mais afastados, o programa se chama Farmamóvel.[(fonte)](https://portaldeprefeitura.com.br/2022/04/16/prefeitura-de-caruaru-inaugura-farmamovel-na-zona-rural-do-municipio-saiba-como-ter-acesso/)

- Iniciado durante a pandemia, o governo do estado de Pernambuco criou o programa Remédio em Casa, que realiza entregas de medicamentos em domicilio para os usuários devidamente cadastrados que são residentes apenas da Região Metropolitana do Recife (RMR).[(fonte)](http://portal.saude.pe.gov.br/noticias/secretaria/farmacia-de-pe-realiza-entrega-em-domicilio) 