
const EventEmitter = require('events');


const meuEmitter = new EventEmitter();

// Definindo um evento chamado 'mensagem'
meuEmitter.on('mensagem', (mensagem) => {
    console.log('Mensagem recebida:', mensagem);
});

// Emitindo o evento 'mensagem' com um argumento
meuEmitter.emit('mensagem', 'Seja Bem Vindo');
