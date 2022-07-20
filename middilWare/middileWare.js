const mwfn1 = (req,res,next)=>{
    console.log(req.method)

    if(req.method === 'GET'){
        res.status(400).json({
            "msg":"GET method is not found"
        })
    }else{
        next()
    }

    next()
};
module.exports = {mwfn1}