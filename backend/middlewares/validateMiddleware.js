const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.errors[0].message, // First validation error
        });
    }
};

module.exports = validate;
