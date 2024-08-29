const {
    getMembers,
    getArticles,
    getStatus,
    getArticleById,
} = require('./utiles/db');
const { handleAsync } = require('./utiles/api');

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('NextBlog api');
});

app.get('/members', async (req, res) => {
    handleAsync(res, getMembers());
});

app.get('/status', (req, res) => {
    handleAsync(res, getStatus());
});

app.get('/articles', (req, res) => {
    handleAsync(res, getArticles());
});

app.post('/articles/', (req, res) => {
    res.send('articles');
});

app.get('/articles/:id', (req, res) => {
    handleAsync(res, getArticleById(req.params.id));
});

app.delete('/articles/:id', function (req, res) {
    res.send('remove article by id');
});
