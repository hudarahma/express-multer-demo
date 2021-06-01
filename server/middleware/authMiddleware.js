const { verify } = require("../utils/utils");
const db = require('../models/index');

module.exports = (req, res, next) => {

    try {
        const token = req.headers['authorization'].split(" ")[1];
        console.log(token);
        const id = await verify(token);
        console.log(id);
        const user = db.Users.findOne({ where: { id } });
        req.user = user;
    
        next();
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}