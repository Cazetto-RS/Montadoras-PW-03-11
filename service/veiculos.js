import { veiculos } from "../data/dados.js";
import { montadoras } from "../data/dados.js"; // Importe as montadoras para acessar os nomes

export const listar = (montadoraId, search) => {
    let resultado = veiculos;

    // Filtra por ID da montadora (se fornecido)
    if (montadoraId) {
        resultado = resultado.filter(veiculo => veiculo.montadora === montadoraId);
    }

    // Filtra por parte do nome do veículo OU parte do nome da montadora
    if (search) {
        resultado = resultado.filter(veiculo => {
            // Verifica se o nome do veículo contém a busca
            const veiculoMatch = v9eiculo.modelo.toLowerCase().includes(search.toLowerCase());

            // Encontra a montadora associada ao veículo
            const montadoraDoVeiculo = montadoras.find(montadora => montadora.id === veiculo.montadora);

            // Verifica se o nome da montadora contém a busca
            const montadoraMatch = montadoraDoVeiculo.nome.toLowerCase().includes(search.toLowerCase());

            // Retorna true se o veículo OU a montadora corresponder à busca
            return veiculoMatch || montadoraMatch;
        });
    }

    return resultado;
}

export const consultarPorId = (id) => {
    return veiculos.find(veiculo => veiculo.id === id);
}