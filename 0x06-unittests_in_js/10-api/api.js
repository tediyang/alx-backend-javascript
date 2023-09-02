const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    res.send(`Payment methods for cart :${id}`);
});

app.get('/available_payments', (req, res) => {
    const avail = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };
    res.send(avail);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;