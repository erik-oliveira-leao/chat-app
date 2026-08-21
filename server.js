// server.js
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

const server = http.createServer((request, response) => {
    if (request.url === '/' || request.url === '/index.html') {
        fs.readFile('./index.html', (error, content) => {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                response.end('Erro ao carregar a página.');
                return;
            }

            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end(content);
        });
        return;
    }

    if (request.url === '/style.css') {
        fs.readFile('./style.css', (error, content) => {
            if (error) {
                response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                response.end('Arquivo não encontrado.');
                return;
            }

            response.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
            response.end(content);
        });
        return;
    }

    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Página não encontrada.');
});

const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    console.log('Novo cliente conectado');

    ws.on('message', (message) => {
        // Converte o Buffer recebido em string legível
        const textMessage = message.toString();
        console.log('Mensagem recebida:', textMessage);
        
        // Envia a mensagem de texto para todos os clientes conectados
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(textMessage);
            }
        });
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });

    ws.on('error', (error) => {
        console.error('Erro no WebSocket:', error);
    });
});

// Define a porta e inicia o servidor HTTP e WebSocket
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
