const sendResponse = require('../utils/response');

const getDashboard = (req, res) => {
    return sendResponse(res, 200, true, 'Welcome to your Dashboard!', {
        userId: req.user.id,
        info: 'This is protected dashboard data!'
    });
};

module.exports = { getDashboard };
