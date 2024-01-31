const loginForm = document.getElementById('login-form');

loginForm.onsubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    fetch('http://localhost:3333/usuarios/login', {
        method: "POST",
        body: JSON.stringify({
            email: email,
            senha: senha
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        if(data.login == 'success') {
            window.localStorage.setItem('cpf', data.userData.cpf);
            window.location.href = 'app.html';
        }else {
            let mensagem = document.getElementById('mensagem');
            mensagem.innerText = "Login incorreto";
        }
    })
}