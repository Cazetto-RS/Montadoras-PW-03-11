import express from 'express';

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    const resposta = {
        "Result":"API em execução"
    }
    return res.status(200).json("API em execução");
});

app.get('/soma',(req,res)=>{
    const {valores} = req.body;
    console.log(valores);
    return res.status.json({"teste":0})
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Aplicação está em execução\n http://localhost:${port}`)
});
