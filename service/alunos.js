import {alunos} from "../data/data.js";

export const listar = (nome)=>{
    let resultado = alunos;
    if(nome){
        resultado = alunos.filter(alunos => alunos.nome.toLowerCase().includes(nome.toLowerCase()))
    }

    return alunos;
}

// É a mesma coisa da de cima 👌

// export function listar (){
//     return alunos;
// }