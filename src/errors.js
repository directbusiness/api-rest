module.exports = {
    tryCatch(Error, req, res, next) {
        res.status(Error.status || 500);
        res.json({ Error: Error.mensage })
    }
}