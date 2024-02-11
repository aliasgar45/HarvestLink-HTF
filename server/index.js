const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Define CORS options
const corsOptions = {
    origin: 'http://127.0.0.1:5173', // Replace with the origin from where your requests will come
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify which HTTP methods are allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify which headers are allowed
};

// Enable CORS with options
app.use(cors(corsOptions));

// Database connection
const mongoURI = require('./config').mongoURI; // Assuming you have a config file
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
const hotelsRoutes = require('./routes/hotelsRoutes');
const donatedFoodRoutes = require('./routes/donatedFoodRoutes');
const foodRequestsRoutes = require('./routes/foodRequestsRoutes')
const volunteerRoutes = require('./routes/volunteerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/hotels', hotelsRoutes);
app.use('/donatedFood', donatedFoodRoutes);
app.use('/foodRequests', foodRequestsRoutes);
app.use('/volunteers', volunteerRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
