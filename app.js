import express from 'express';
import * as montadoras from './service/montadoras.js';
import * as veiculos from './service/veiculos.js';

const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
    return res.status(200).json({
        "veiculos": `http://localhost:${PORT}/veiculo`,
        "montadoras": `http://localhost:${PORT}/montadora`
    });
});

// Rota para listar todas as montadoras (com filtro por nome)
app.get('/montadora', (req, res) => {
    const { search } = req.query; // Captura o parâmetro de busca
    return res.status(200).json(montadoras.listar(search));
});

// Rota para consultar uma montadora por ID
app.get('/montadora/:id', (req, res) => {
    const id = req.params.id;
    const montadora = montadoras.consultarPorId(id);
    if (montadora) {
        return res.status(200).json(montadora);
    } else {
        return res.status(404).json({ message: "Montadora não encontrada" });
    }
});

// Rota para listar todos os veículos (com filtro por montadora ou busca)
app.get('/veiculo', (req, res) => {
    const { montadora, search } = req.query;
    return res.status(200).json(veiculos.listar(montadora, search));
});

// Rota para consultar um veículo por ID
app.get('/veiculo/:id', (req, res) => {
    const id = req.params.id;
    const veiculo = veiculos.consultarPorId(id);
    if (veiculo) {
        return res.status(200).json(veiculo);
    } else {
        return res.status(404).json({ message: "Veículo não encontrado" });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});