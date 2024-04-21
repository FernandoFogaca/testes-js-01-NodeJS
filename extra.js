

function encontrarAluno(nomeAluno, listaNomeAlunos) {
  
    return listaNomeAlunos.includes(nomeAluno);

}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
   
    return listaNomeAlunos.filter(aluno => aluno === nomeAluno);
}

function construirAluno(nomeAluno, idadeAluno) {
   
    return {
        nome: nomeAluno,
        idade: idadeAluno
    };
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
};