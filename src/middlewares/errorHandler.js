import STATUS_CODE from "../common/Constant"

const errorHandler = (err, req, res, next) =>{
    const statusCode = err.statusCode || STATUS_CODE.internal_server_error
    const message = err.message || "internal server error"

    return res.status(statusCode).json({
        success : false,
        error : message
    })
}

export default errorHandler;