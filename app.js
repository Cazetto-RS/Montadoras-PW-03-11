import express from 'express';

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    const resposta = {
        "Result":"API em execução"
    }  
    return res.status(200).json(resposta);
});

app.get('/soma',(req,res)=>{
    const {valores} = req.body;
    let result = valores.reduce((total, valor)=>total+valor,0)
    return res.status(200).json({"result":result})
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Aplicação esta em execução\nhttp://localhost:${port}`)
})