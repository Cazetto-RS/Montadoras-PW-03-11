import { montadoras } from "../data/dados.js";

export const listar = (search) => {
    let resultado = montadoras;

    // Filtra por parte do nome da montadora (se search for fornecido)
    if (search) {
        resultado = resultado.filter(montadora => 
            montadora.nome.toLowerCase().includes(search.toLowerCase())
        );
    }

    return resultado;
}

export const consultarPorId = (id) => {
    return montadoras.find(montadora => montadora.id === id);
}