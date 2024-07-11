// server.js

const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Middleware to enable CORS (if necessary)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Endpoint to fetch and encode PNG image to Base64
app.get('/fetchImage', async (req, res) => {
    const imageUrl = req.query.imageUrl;

    try {
        // Fetch the image from the remote server
        const response = await fetch(imageUrl);
        const imageBuffer = await response.buffer();

        // Encode the image buffer to Base64
        const base64Image = imageBuffer.toString('base64');
        const dataUrl = `data:image/png;base64,${base64Image}`;

        // Send the Base64 data URL as JSON response
        res.json({ dataUrl });
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send('Error fetching image');
    }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
