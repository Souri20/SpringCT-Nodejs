
const validate = (Schema, source= "body") => (req, res, next) =>{

    const {error} = Schema.validate(req[source]);

    if(error){
        return res.status(400).json({
            success : false,
            error : error.details.map((item) =>item.message),
        })
    }
    next();
}

export default validate;