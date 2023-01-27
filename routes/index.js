const express=require("express");
const {getAllUsers, signup, login, Logout }= require("../controllers/user.js");
const { verifyToken }=require("../middleware/VerifyToken.js") ;
const { refreshToken } =require("../controllers/RefreshToken.js") ;
const user = require('../routes/users')
var router = express.Router();



//router.get('/users', verifyToken, getAllUsers);
// router.post('/users', signup);
// router.post('/login', login);
// router.get('/token', refreshToken);
// router.delete('/logout', Logout);

module.export= router;