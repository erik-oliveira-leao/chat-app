# Chat em Tempo Real

Aplicação de chat em tempo real construída com HTML, CSS, JavaScript e Node.js. A comunicação entre os navegadores é feita por WebSocket, permitindo que as mensagens sejam enviadas para todos os clientes conectados.

## Funcionalidades

- Identificação do usuário por nome.
- Envio de mensagens em tempo real.
- Distribuição das mensagens para todos os clientes conectados.
- Interface responsiva para uso em diferentes tamanhos de tela.
- Servidor HTTP integrado para entregar a aplicação no navegador.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js
- [ws](https://www.npmjs.com/package/ws)

## Pré-requisitos

- Node.js instalado.
- npm, instalado junto com o Node.js.

Para verificar as instalações:

```bash
node --version
npm --version
```

## Instalação

No diretório do projeto, instale as dependências:

```bash
npm install
```

## Execução

Inicie o servidor com:

```bash
npm start
```

Também é possível executar diretamente:

```bash
node server.js
```

Quando o servidor iniciar, abra o endereço abaixo no navegador:

```text
http://localhost:8081
```

Mantenha o terminal aberto enquanto estiver usando o chat. Para encerrar o servidor, pressione `Ctrl+C`.

## Como usar

1. Abra `http://localhost:8081` em duas ou mais abas ou janelas do navegador.
2. Informe seu nome.
3. Digite uma mensagem.
4. Clique em **Enviar**.
5. A mensagem será exibida para todos os clientes conectados.

## Estrutura do projeto

```text
chat-app/
├── index.html    # Interface e lógica do cliente WebSocket
├── style.css     # Estilos da aplicação
├── server.js     # Servidor HTTP e WebSocket
├── package.json  # Configuração e dependências do projeto
└── README.md     # Documentação
```

## Comunicação

O cliente se conecta ao WebSocket em:

```text
ws://localhost:8081
```

O servidor retransmite cada mensagem recebida para todos os clientes que permanecem conectados.

## Solução de problemas

### Mensagem `Upgrade Required`

Essa mensagem normalmente aparece quando a porta do WebSocket é acessada antes de o servidor HTTP estar em execução, ou quando o navegador é direcionado para um servidor que aceita apenas conexões WebSocket.

Confirme que o servidor está iniciado:

```bash
node server.js
```

Depois acesse a aplicação por:

```text
http://localhost:8081
```

Não abra o arquivo `index.html` diretamente pelo Explorer.

### Porta 8081 ocupada

Se a porta já estiver em uso, encerre o processo Node que está rodando ou altere a porta no arquivo `server.js`. Nesse caso, atualize também o endereço do WebSocket em `index.html`.

## Testes

O projeto ainda não possui testes automatizados configurados. A validação manual pode ser feita abrindo a aplicação em duas abas e enviando mensagens entre elas.
