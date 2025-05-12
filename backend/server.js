const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');


const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const dashboardRoute = require('./routes/dashboardRoute');
app.use('/api/auth', authRoutes);
app.use('/api', dashboardRoute);

const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
app.use(notFoundMiddleware);


// Global Error Handler
const errorHandler = require('./middlewares/errorMiddleware');
app.use(errorHandler);



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
