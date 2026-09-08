const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello World! CI/CD Pipeline is working 🎉');
});

// A dummy endpoint for testing purposes
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Only start the server if this file is run directly (helps with testing)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app; // Exported for testing purposes
