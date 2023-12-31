import express from 'express';
import { jurosSimples, Montante } from './funcoes.js';

const app = express();

app.get('/juros-simples', (req, res) => {
    const capital = parseFloat(req.query.capital);
    const taxaJuros = parseFloat(req.query.juros);
    const tempo = parseFloat(req.query.tempo);
    if (isNaN(capital) || isNaN(taxaJuros) || isNaN(tempo)) {
        res.status(400).json({ error: 'Os parâmetros devem ser números válidos' });
    } else {
        const juros = jurosSimples(capital, taxaJuros, tempo);
        res.json({ juros: juros });
    }
});

app.get('/montante', (req, res) => {
    const capital = parseFloat(req.query.capital);
    const taxaJuros = parseFloat(req.query.juros);
    const tempo = parseFloat(req.query.tempo);
    if (isNaN(capital) || isNaN(taxaJuros) || isNaN(tempo)) {
        res.status(400).json({ error: 'Os parâmetros devem ser números válidos' });
    } else {
        const montante = Montante(capital, taxaJuros, tempo);
        res.json({ montante: montante });
    }
});

app.listen(8080, () => {
    console.log("O aplicativo está rodando!");
});
