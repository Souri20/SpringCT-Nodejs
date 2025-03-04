import jwt from "jsonwebtoken"

const auth = (req, res, next) =>{
    const token = req.body.token || req.headers["authorization"]
    if(!token){
        return res.status(400).json({
            success : false,
            msg : "Token is required!"
        })
    }

    try{
        const decodedData = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = decodedData;

    }catch(err){
        
        return res.status(400).json({
            success: false,
            msg : err.message
        })
    }
    return next()
};

export default auth;