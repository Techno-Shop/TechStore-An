const jwt = require('jsonwebtoken');
const Users = require("../database/userModels")    

async  function verifyAuth(req,res,next){
    try{
    const token = req.cookies.Authorization;
    var decoded = jwt.verify(token,process.env.SECRET_jwt_code);
    const user = await Users.findById(decoded.sub)
        if (Date.now() > decoded.exp)
         return res.status(401).json({ message: "Token expired" });
   else if(!user) {
    return res.status(401).json({ message: "User not found" }) }
   req.Users= user;


next()
}catch(err){
    res.status(401).json({ message: "Token not found" });
}
}
module.exports = verifyAuth ; 