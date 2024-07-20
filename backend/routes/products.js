const express = require('express');
const axios = require('axios');
const router = express();

router.get('/:companyname/categories/:categoryname/products', async (req, res) => {
    const { companyname, categoryname } = req.params;
    const { top, minPrice, maxPrice } = req.query;

    if (!["AMZ", "FLP", "SNP", "MYN", "AZO"].includes(companyname)) {
        return res.status(400).json({ error: 'Invalid company name' });
    }

    if (!["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"].includes(categoryname)) {
        return res.status(400).json({ error: 'Invalid category name' });
    }

    try {
        const response = await axios.get(`${process.env.API_URL}/companies/${companyname}/categories/${categoryname}/products`, {
            headers: { 'Authorization': `Bearer ${process.env.AUTH_TOKEN}` },
            params: { top, minPrice, maxPrice }
        });

        const products = response.data;
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
