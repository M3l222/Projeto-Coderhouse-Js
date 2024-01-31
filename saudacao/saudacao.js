
var nomeUsuario;

do {
    nomeUsuario = prompt("Digite o seu nome:");
  //Condicional para que o usuário digite um nome válido
    if (nomeUsuario === null || nomeUsuario.trim() === "" || !/^[a-zA-Z]+$/.test(nomeUsuario)) {
        alert("Por favor, digite um nome válido contendo apenas letras.");
    }
} while (nomeUsuario === null || nomeUsuario.trim() === "" || !/^[a-zA-Z]+$/.test(nomeUsuario));
//Condicional para nome masculino ou feminino
var saudacao = nomeUsuario.toLowerCase().endsWith('a') ? "Bem-vinda" : "Bem-vindo";

alert(saudacao + ", " + nomeUsuario + "! Seja bem-vindo(a)!");



