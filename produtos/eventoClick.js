// Selecionar todos os elementos com a classe 'forms-btn'
var botoes = document.querySelectorAll('.forms-btn');

// Iterar sobre cada botão e adicionar um ouvinte de evento de clique
botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {
    console.log('O botão foi clicado!');
  });
});
