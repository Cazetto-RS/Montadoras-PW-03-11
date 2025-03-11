import { alunos } from "../data/data.js";

export const listar = (nome) => {
    let resultado = alunos; // Inicializa com a lista completa de alunos

    if (nome) {
        // Filtra os alunos cujo nome contém a string fornecida (case-insensitive)
        resultado = alunos.filter(aluno => 
            aluno.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    return resultado; // Retorna a lista filtrada (ou a lista completa se não houver filtro)
}

export const consultarPorId = (_id) => {
    return alunos.find(aluno => aluno.id == _id);
}

// É a mesma coisa da de cima 👌

// export function listar (){
//     return alunos;
// }