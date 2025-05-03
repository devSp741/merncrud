const jwt = require('jsonwebtoken');
const sendResponse = require('../utils/response');

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return sendResponse(res, 401, false, 'Unauthorized: No token provided');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Token ke andar user ka data hota hai (id)
        next();
    } catch (error) {
        return sendResponse(res, 401, false, 'Unauthorized: Invalid token');
    }
};

module.exports = protect;
