module.exports = {
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY,
  DB_CONNECT: process.env.MONGO_URI,
  CALLBACK_URL: process.env.CALLBACK_URL,
  CLIENT_URL: process.env.CLIENT_URL,
};
