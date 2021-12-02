const storageMiddleware = (req, res, next) => {
    req.storage = {};

    next();
}

export default storageMiddleware;