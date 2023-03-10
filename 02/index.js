const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

function vericarArray(array) {
    const resultado = array.some(item => item.length > 5);

    if (resultado) { console.log("existe palavra inválida") }

    else { console.log("array validado"); }
}

vericarArray(palavras);
