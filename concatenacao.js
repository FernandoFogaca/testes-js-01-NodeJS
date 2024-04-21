

/*  Cola:
    É possível somar com a operação + e também com interpolação utilizando crase
    `texto ${variavel} texto`
*/

function concatenaTexto(texto1, texto2) {
    
    return texto1 + texto2;
}

function concatenaTextoNumero(texto, numero) {
        
        return texto + numero;
}

function concatenaNumeroTexto(numero, texto) {
        
        return numero + texto;
}

module.exports = {
    concatenaTexto,
    concatenaTextoNumero,
    concatenaNumeroTexto


    
};