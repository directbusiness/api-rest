module.exports = {
    error(error, req, res, next) {
        res.status(error.status || 500);
        res.json({ error: error.mensage })
    }
}

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({ error: error.message });
// })