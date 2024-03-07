// Modal
var modal = document.getElementById("modal");

// Botões
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

// Abrir modal
function openModal() {
  modal.style.display = "block";
}

// Fechar o modal
function closeModal() {
  modal.style.display = "none";
}

// Evento de clique para o botão "Sim"
yesBtn.addEventListener("click", function() {
  console.log("Usuário é de São Paulo.");
  closeModal();
});

// Evento de clique para o botão "Não"
noBtn.addEventListener("click", function() {
  console.log("Usuário não é de São Paulo.");
  // Redirecionamento para outra página
  window.location.href = "noBtn.html";
});

// Exibir o modal assim que a página for carregada
window.onload = openModal;
