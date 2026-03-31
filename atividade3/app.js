const express = require('express');
const app = express();

const PORT = 3000;

let produtos = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    produtos.push({
        id: id,
        nome: nome,
        qtd: parseInt(qtd)
    });

    res.send(`Produto ${nome} adicionado com sucesso!`);
});

app.get('/listar', (req, res) => {
    res.json(produtos);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;

    produtos = produtos.filter(prod => prod.id !== id);

    res.send(`Produto removido com sucesso!`);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;

    const produto = produtos.find(prod => prod.id === id);

    if (produto) {
        produto.qtd = parseInt(qtd);
        res.send(`Quantidade atualizada!`);
    } else {
        res.send(`Produto não encontrado`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
