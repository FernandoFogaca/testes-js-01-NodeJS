/*
    Cola:
    Utilizar if e else para condicionais, sempre com uma condição que resulta em true ou false
*/

function classificaIdade(idade) {

    if (idade < 12) {
        return "criança";
    }           
    else if (idade < 18) {
        return "adolescente";
    }
    else {
        return "adulto";
    }
}

function ehPar(numero) {
    
    if (numero % 2 === 0) {
        return "par";
    }
    else {
        return "ímpar";
    }
}

function podeVotar(idade) {
    
    if (idade < 16) {
        return "não pode votar";
    }
    else {
        return "pode votar";
    }
}

function encontraMaior(a, b, c) {
   
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}

module.exports = {
    classificaIdade,
    ehPar,
    podeVotar,
    encontraMaior
};  