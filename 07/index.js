const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function localizarEndereco(array, cep) {
    const resultado = array.find(item => item.cep === cep)

    console.log(resultado.rua)
}

localizarEndereco(enderecos, 00222444)