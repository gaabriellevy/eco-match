// cadastro.PRODUTO.js

// Function to save product information
function salvarProduto() {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const descricaoProduto = document.getElementById('descricaoProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;

    fetch('http://localhost:3333/produtos', {
        method: "POST",
        body: JSON.stringify({
            nome: nomeProduto,
            descricao: descricaoProduto,
            preco: precoProduto
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        } else {
            throw new Error("Resposta do servidor não está no formato JSON");
        }
    })
    .then(data => {
        const mensagem = document.getElementById('mensagem');
        mensagem.style = "color: #FFF";
        mensagem.innerText = "Sucesso ao cadastrar produto";
    })
    .catch(error => {
        console.error(error);
    });
}

function formatarMoeda(input) {
    var valor = input.value.replace(/\D/g, ''); 
    valor = (valor / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    input.value = valor;
}