// Middleware to handle unsupported HTTP methods (405 errors)
const methodNotAllowedMiddleware = (req, res, next) => {
    res.status(405).json({
        success: false,
        message: `Method ${req.method} not allowed on ${req.originalUrl}`,
        error: 'Method Not Allowed'
    });
};

module.exports = methodNotAllowedMiddleware;
