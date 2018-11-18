// prod.js - production keys here
module.exports = {
    gitlabClientID: process.env.GITLAB_CLIENT_ID,
    gitlabClientSecret: process.env.GITLAB_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishKey: process.env.STIPE_PUBLISH_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
};
