const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401)
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.id = decoded.id
        next()
    } catch (error) {
        console.log(error)
        return res.status(403)
    }

}

module.exports = verifyToken