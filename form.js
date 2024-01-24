// #Código utilizado para fazer o formulário

function processarCompra(produto) {
        var nome = prompt("Digite seu nome:");
        var email = prompt("Digite seu e-mail:");
        var telefone = prompt("Digite seu telefone:");

        if (nome && email && telefone) {
            var informacoesCompra = {
                produto: produto,
                nome: nome,
                email: email,
                telefone: telefone
            };

            // Exibir alerta com mensagem de agradecimento
            alert("Obrigado pela compra, entraremos logo em contato!");

            // Adicionar informações ao array ou fazer o que for necessário com elas
            console.log(informacoesCompra);
        } else {
            // Tratar o caso em que o usuário cancela algum prompt
            alert("Compra cancelada. Preencha todas as informações.");
        }
    }