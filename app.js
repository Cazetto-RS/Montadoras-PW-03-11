import express from 'express';
import {listar} from "./service/alunos.js"

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    return res.status(200).json({
        "alunos": `http://localhost:${PORT}/alunos`,
        "disciplinas": `http://localhost:${PORT}/disciplinas`,
    })
})

app.get('/alunos',(req,res)=>{
    let nome = req.query.nome;
   return res.status(200).json(listar(nome));

    // let nome = req.query.nome;
    // if(nome){
    //     res.status(200).json(consultarPorNome(nome))
    // }
    // else{
    //     res.status(200).json(listar());
    // }
});

app.listen(PORT,()=>{
    console.log(`Servidor rodando> http://localhost:${PORT}`)
})