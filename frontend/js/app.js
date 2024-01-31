document.addEventListener("DOMContentLoaded", () => {

    const lista = document.getElementById('lista');

    fetch('http://localhost:3333/produtos')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

        data.forEach(e => {
            box = document.createElement('div');
            box.classList.add('box');

            link = document.createElement('a');
                imagem = document.createElement('img');
                imagem.src = "imagens/ComputadorDAecomatch.jpg";
            link.append(imagem);



            h3 = document.createElement('h3');
            h3.innerText = e.nome;

            p = document.createElement('p');
            p.innerText = "Preço: $" + e.preco;

            box.append(link);
            box.append(h3);
            box.append(p);

            lista.append(box);
        });
        
        

    })

})