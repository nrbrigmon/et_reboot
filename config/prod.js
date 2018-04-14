module.exports = {
    pool: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    },
    auth: {
        googleClientID: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        cookieKey: process.env.COOKIE_SESSION,
        redirectDomain: process.env.REDIRECT_DOMAIN
    }
}