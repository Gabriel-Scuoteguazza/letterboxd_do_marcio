async function buscarFilmes() {
    // acessar a rota GET do backend, trazer os filmes e inserir os filmes no HTML
    const resposta = await fetch("http://localhost:3955/filmes") // JSON
    const filmes = await resposta.json() // converter o JSON em objeto javascript
    const sectionFilmes = document.querySelector(".filmes")

    filmes.forEach((filme) => {
        sectionFilmes.innerHTML += `    
                    <div>
                        <h2>${filme.nomeDoFilme}</h2>
                        <p><strong>Gênero:</strong> ${filme.genero}</p>
                        <p><strong>Duração:</strong> ${filme.duracao} minutos</p>
                        <p><strong>Classificação indicativa:</strong> ${filme.classificacao}</p>
                    </div>
                `
    })
}

buscarFilmes()