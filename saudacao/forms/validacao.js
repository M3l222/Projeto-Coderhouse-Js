function buscarEndereco() {
    var cep = document.getElementById("cepInput").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('CEP não encontrado.');
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                throw new Error('CEP não encontrado.');
            }
            if (data.uf !== "SP") {
                mostrarNaoEntrega();
            } else {
                mostrarEndereco(data);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            mostrarErro();
        });
}

function mostrarEndereco(data) {
    var endereco = `
        <p>CEP: ${data.cep}</p>
        <p>Logradouro: ${data.logradouro}</p>
        <p>Complemento: ${data.complemento}</p>
        <p>Bairro: ${data.bairro}</p>
        <p>Cidade: ${data.localidade}</p>
        <p>Estado: ${data.uf}</p>
    `;
    document.getElementById("endereco").innerHTML = endereco;
}

function mostrarNaoEntrega() {
    alert("Desculpe, não entregamos fora de São Paulo.");
}

function mostrarErro() {
    document.getElementById("endereco").innerHTML = "CEP não encontrado.";
}