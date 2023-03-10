const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

function filtrarNomePorLetra(array, letra) {
    const resultado = nomes.filter(item => item[0] === letra.toUpperCase() || item[0] === letra.toLowerCase());
    console.log(resultado);
}

filtrarNomePorLetra(nomes, "a");
