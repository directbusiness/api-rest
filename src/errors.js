module.exports = {
    tryErrors(error, req, res) {
        const erro = new Error('Rota não encontrada!');
        erro.status = 404;
        // res.status(404).end();
    }
}

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({ error: error.message });
// })

// module.exports = {
//     tryErrors(req, res) {
//         const error = new Error("Rota não encontrada!");
//         error.status = 404;

//         res.status(error.status || 500);
//         res.send({ message: error.message });
//     }
// }

// app.use((req, res, next) => {
//     const erro = new Error("Rota não encontrada!");
//     erro.status = 404;
//     next(erro);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.send({
//         mensagem: error.message
//     });
// });