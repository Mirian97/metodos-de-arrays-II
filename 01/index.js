const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function buscarLivro(array, nomeDoLivro) {
    const resultado = array.findIndex(item => item === nomeDoLivro);
    console.log(`O livro está na posição ${resultado + 1}`)
}

buscarLivro(livros, nomeDoLivro);