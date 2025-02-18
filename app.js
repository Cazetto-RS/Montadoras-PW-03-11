import express from 'express';

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    return res.status(200).json();
});

const port = 3000;
app.listen(port,()=>{
    console.log(`Aplicação está em execução\n http://localhost:${port}`)
});
