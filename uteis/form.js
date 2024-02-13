// #Código utilizado para fazer o formulário

// #Pede os dados
function processarCompra(produto) {
    var nome = prompt("Digite seu nome:");
    var email = prompt("Digite seu e-mail:");
    var telefone = prompt("Digite seu telefone:");

    // #Colhe as informações
    if (nome && email && telefone) {
        var informacoesCompra = {
            produto: produto,
            nome: nome,
            email: email,
            telefone: telefone
        };

        // #Armazena as informações no localStorage
        localStorage.setItem('informacoesCompra', JSON.stringify(informacoesCompra));

        // #Alerta de agradecimento
        alert("Obrigado pela compra, entraremos logo em contato!");
        
    } else {
        // Tratar o caso em que o usuário cancela algum prompt
        alert("Compra cancelada. Preencha todas as informações.");
    }
}
