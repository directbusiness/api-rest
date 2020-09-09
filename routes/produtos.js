const express = require('express');
const route = express.Router();

route.get('/produtos', function(req, res, next){
    res.status(200).send({
        mensagem: "Usando o GET na rota produtos"
    });
});


route.get('/:id_produto', function (req, res, next) {
    res.status(200).send({
        mensagem: "Consultando um produto especifico"
    });
});


route.post('/produtos', function(req, res, next){
    res.status(201).send({
        mensagem: "Usando o POST na rota protudos"
    });
});


route.delete('/produtos', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o metodo DELETE para a rota produtos"
    });
});


route.delete('/:id_produto', (req, res, next)=>{
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: "Usando o metodo DELETE para um ",
            id: id
        });
    
        }else{
            res.status(200).send({
                mensagem: "O ID do produto deletado é " + id
            });
    };
});


module.exports = route;