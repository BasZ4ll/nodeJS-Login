
exports.auth = async(req, res, next) => {
    try {
        const token = req.header["authtoken"]
        console.log(token)
        next();

    }catch (err) {
        console.log(err)
        res.send('Error').status(500)
    }
}