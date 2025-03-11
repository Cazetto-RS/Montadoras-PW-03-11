import express from 'express';
import * as alunos from './service/alunos.js';
import * as disciplinas from './service/disciplinas.js'; // Importação correta de todas as funções de disciplinas

const app = express();
const PORT = 3030;

// Rota principal
app.get('/', (req, res) => {
    return res.status(200).json({
        "alunos": `http://localhost:${PORT}/alunos`,
        "disciplinas": `http://localhost:${PORT}/disciplinas`
    });
});

// Rota para listar alunos (com filtro por nome)
app.get('/alunos', (req, res) => {
    let nome = req.query.nome;
    return res.status(200).json(alunos.listar(nome));
});

// Rota para buscar um aluno por ID
app.get('/alunos/:id', (req, res) => {
    let id = req.params.id;
    const aluno = alunos.consultarPorId(id);
    if (aluno) {
        return res.status(200).json(aluno);
    } else {
        return res.status(404).json({ message: "Aluno não encontrado" });
    }
});

// Rota para listar disciplinas (com filtro por nome)
app.get("/disciplinas", (req, res) => {
    const { nome } = req.query; // Captura o parâmetro de consulta "nome"
    const disciplinasFiltradas = disciplinas.listar(nome); // Chama a função listar de disciplinas
    res.json(disciplinasFiltradas); // Retorna a lista filtrada
});

// Rota para buscar uma disciplina por ID
app.get('/disciplinas/:id', (req, res) => {
    let id = req.params.id;
    const disciplina = disciplinas.consultarPorId(id);
    if (disciplina) {
        return res.status(200).json(disciplina);
    } else {
        return res.status(404).json({ message: "Disciplina não encontrada" });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});