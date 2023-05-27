const config = {
    app: {
        port: process.env.APP_PORT || 3003
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3333,
        name: process.env.DB_NAME
    }
}

module.exports = config