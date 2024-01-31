const cadastroUsuarioForm = document.getElementById('cadastro-usuario-form');

cadastroUsuarioForm.onsubmit = (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;

    fetch('http://localhost:3333/usuarios', {
        method: "POST",
        body: JSON.stringify({
            nome: nome,
            email: email,
            cpf: cpf,
            senha: senha,
            endereco: endereco
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Verificar se a resposta contém dados
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        } else {
            throw new Error("Resposta do servidor não está no formato JSON");
        }
    })
    .then(data => {
        console.log(data.status);

     window.location.href = "login.html";
    })
    .catch(error => {
        // Tratar erros de rede, do servidor, ou outras falhas
        console.error(error);
        let mensagem = document.getElementById('mensagem');
        mensagem.innerText = "Erro durante a requisição";
    });
}