const jwt = require('jsonwebtoken')

exports.authToken = async (req, res, next) =>{
    //validate token
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token){
        return next(res.status(401).json({
            status: 401,
            message: "Token tidak ditemukan"
        }))
    }

    //verif token (decoded)
    let decoded;
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        req.decoded = decoded
    } catch (err) {
        return next(res.status(401).json({
            error: err,
            message: "Token tidak ada"
        }))
    }

    next()
}