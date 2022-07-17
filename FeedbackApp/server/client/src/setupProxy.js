const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(["/auth/google","/api"],createProxyMiddleware({target : "http://localhost:3000"}));
}
