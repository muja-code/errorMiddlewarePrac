const HttpException = require('../exceptions/http-exception');

const errorMiddleware = (error, req, res, next) => {
    if (error instanceof HttpException) {
        return res.status(error.status).send({ error: true, message: error.message });
    }

    console.error(error.stack);
    return res.status(500).send({ error: true, message: 'Something broke!' });
};

module.exports = errorMiddleware;
