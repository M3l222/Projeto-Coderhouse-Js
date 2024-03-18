function validateForm() {
    var nome = document.getElementById("nome").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var cep = document.getElementById("cep").value;
    var isValid = true;

    // Validação do nome
    if (nome === "") {
        document.getElementById("nomeError").textContent = "Por favor, digite o nome.";
        isValid = false;
    } else {
        document.getElementById("nomeError").textContent = "";
    }

    // Validação do telefone
    var telPattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!telPattern.test(tel)) {
        document.getElementById("telError").textContent = "Por favor, digite um telefone válido (xx) xxxxx-xxxx ou (xx) xxxxx-xxxx.";
        isValid = false;
    } else {
        document.getElementById("telError").textContent = "";
    }

    // Validação do e-mail
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Por favor, digite um e-mail válido.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validação do CEP (se necessário)
    if (cep === "") {
        document.getElementById("cepError").textContent = "Por favor, digite o CEP.";
        isValid = false;
    } else {
        document.getElementById("cepError").textContent = "";
    }

    return isValid;
}

function validateAndRedirect() {
    if (validateForm()) {
        // Armazenar informações em um array no localStorage
        var formData = {
            nome: document.getElementById("nome").value,
            tel: document.getElementById("tel").value,
            email: document.getElementById("email").value,
            cep: document.getElementById("cep").value
        };
        var storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(formData);
        localStorage.setItem('formData', JSON.stringify(storedData));

        // Redirecionar para outra página após a validação
        window.location.href = "obrigado.html";
    }
}