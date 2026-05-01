require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./BackEnd/config/database'); 

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());


const authRoutes = require('./BackEnd/routes/auth');
const apiRoutes = require('./BackEnd/routes/api');

app.use('/api/auth', authRoutes); 
app.use('/api', apiRoutes);      

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));