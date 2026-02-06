document.addEventListener("DOMContentLoaded", () => {

    const email = "admin@admin.com";
    const senha = "Abc123";

    const campoEmail = document.getElementById("email");
    const campoSenha = document.getElementById("senha");
    const botaoEntrar = document.getElementById("btn-entrar");

    botaoEntrar.addEventListener("click", () => {

        if (campoEmail.value === "" || campoSenha.value === "") {
            alert("E-mail e senha devem ser preenchidos!");
            return;
        }

        if (
            campoEmail.value.toLowerCase() !== email ||
            campoSenha.value !== senha
        ) {
            alert("Usuário ou senha inválidos!");
            return;
        }

        // Login válido
        window.location.href = "index2.html";
    });

});
