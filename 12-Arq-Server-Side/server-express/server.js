const express = require("express");

const app = express();
const port = 5002;

// Rota principal que responde com "Olá mundo | Express"
app.get('/', (req, res) => {
    res.send('Olá mundo | EXPRESS');
});

app.get('/rota', (req, res) => {
    let numerota = req.params.numeroRota
    res.send("ROTA_${numeroRota} - Olá Mundo | EXPRESS");
});

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:${port}");
});