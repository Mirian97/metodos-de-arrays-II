const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const filtrarArray = cidades.filter(cidade => cidade.length < 9);

const string = filtrarArray.join(", ")

console.log(string);