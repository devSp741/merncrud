// Middleware to handle invalid routes (404 errors)
const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
        error: 'Not Found'
    });
};

module.exports = notFoundMiddleware;
