// Criar um botão
var botao = document.createElement('button');
botao.textContent = 'Clique Aqui';
document.body.appendChild(botao);

// Adicionar um ouvinte de evento de clique ao botão
botao.addEventListener('click', function() {
  alert('O botão foi clicado!');
});
