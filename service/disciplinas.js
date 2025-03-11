import { disciplinas } from "../data/data.js";

export const listar = (nome) => {
    let resultado = disciplinas;

    if (nome) {
        resultado = disciplinas.filter(disciplina => 
            disciplina.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    return resultado;
}

export const consultarPorId = (_id) => {
    return disciplinas.find(disciplina => disciplina.id === Number(_id));
}