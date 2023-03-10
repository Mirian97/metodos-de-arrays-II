const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

function filtrarArray(array, profissao, idade) {
    const novoArray = array.filter(item => item.profissao === profissao && item.idade > idade);
    console.log(novoArray);
}

filtrarArray(pessoas, "Programador", 20);
filtrarArray(pessoas, "Jornalista", 30);

function filtrarArray2profissoes(array, profissao1, profissao2, idade) {
    const novoArray = array.filter(item =>
        item.idade <= idade && item.profissao === profissao1 || item.profissao === profissao2);

    console.log(novoArray);
}

filtrarArray2profissoes(pessoas, "Programador", "Jornallista", 29)
