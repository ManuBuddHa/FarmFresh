const express = require('express');
const connectDB = require('./config/db');
const farmerRoutes = require('./routes/farmerRoute');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/farmers', farmerRoutes);
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
});
connectDB();