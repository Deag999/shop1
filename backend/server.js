const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/catalog', require('./routes/catalog'));
app.use('/api/cart', require('./routes/cart'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
