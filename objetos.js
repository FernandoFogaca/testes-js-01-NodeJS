
function retornaPropriedade(objeto, propriedade) {
   
    return objeto[propriedade];
}

function adicionaPropriedade(objeto, propriedade, valor) {
    objeto[propriedade] = valor;
}

module.exports = {
    retornaPropriedade,
    adicionaPropriedade,
};