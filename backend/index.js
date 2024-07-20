const express = require('express');
const productsRouter = require('./routes/products');
require('dotenv').config();
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/companies', productsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
