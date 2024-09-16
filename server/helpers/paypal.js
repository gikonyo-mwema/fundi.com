const dotenv = require('dotenv');
const paypal = require('paypal-rest-sdk');

dotenv.config();

const { PAYPAL_MODE, PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

if (!PAYPAL_MODE || !PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error('Missing PayPal configuration in environment variables');
}

paypal.configure({
    mode: PAYPAL_MODE, // 'sandbox' or 'live'
    client_id: PAYPAL_CLIENT_ID,
    client_secret: PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;
