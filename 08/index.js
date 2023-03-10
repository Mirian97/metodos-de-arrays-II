const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const formatarArray = frutas.map((fruta, index) => {
    const primeiraLetra = fruta[0].toUpperCase();
    const restoPalavra = fruta.slice(1).toLowerCase();
    return `${index} - ${primeiraLetra}${restoPalavra}`
})

console.log(formatarArray);