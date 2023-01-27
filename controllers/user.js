const Users = require('../models').Users;
const bodyParser = require('body-parser');
const jwt= require("jsonwebtoken");
const bcrypt = require("bcryptjs")


module.exports = {

  // create account
  signUp: (req, res) => {

    let {email,password} = req.body
    Users.create({
      email,
      password
    }).then((user) => {
      return res.status(201).json({user})
    })
      .catch(error=>console.log(error))
  },

 login: async(req, res) => {
     try {
       const user = await Users.findAll({
         where:{
           email: req.body.email
         }
       });

       const userId = user[0].id;
       const name = user[0].password;
       const email = user[0].email;
       const accessToken = jwt.sign({userId,email, name}, process.env.ACCESS_TOKEN_SECRET,{
         expiresIn: '15s'
       });
       const refreshToken = jwt.sign({userId,email, name}, process.env.REFRESH_TOKEN_SECRET,{
         expiresIn: '1d'
       });
       await Users.update({refresh_token: refreshToken},{
         where:{
           id: userId
         }
       });
       res.cookie('refreshToken', refreshToken,{
         httpOnly: true,
         maxAge: 24 * 60 * 60 * 1000
       });
       res.json({ accessToken });
     } catch (error) {
       res.status(404).json({msg:"Email not found"});
     }
  },

logout: async (req,res) =>{
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where:{
      refresh_token: refreshToken
    }
  });
  if(!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update({refresh_token: null},{
    where:{
      id: userId
    }
  });
  res.clearCookie('refreshToken');
  return res.sendStatus(200);

},
  // get all users

  getAllUsers: ( req, res ) => {

    Users.findAll({})
      .then(users => {
      return res.status(200).json({users})
    }).catch(err => {
      console.log(err);
      return res.status(400).json({err})
    })
  },

  // get single user by id

  getSingleUser : (req, res) => {
    let id = req.params.id

    Users.findByPk(id)
      .then((user) => {
        return res.status(200).json({user})
      }).catch(err => {
      return res.status(400).json({err})
    })
  },



// delete user by id

  deleteSingleUser: (req, res) => {
    let id = req.params.id

    Users.destroy({
      where: {id: id}
    }).then(() =>{
      return res.status(200).json({
        "message": "User Deleted successfully"
      })
    }).catch(err =>{
      return res.status(400).json({error})
    })

  },

// delete all users

  deleteAllUsers: (req, res) => {
    Users.destroy({
      truncate: true
    }).then(() => {
      return res.status(200).json({
        success: true,
        "message": "All Users deleted"
      })
    }).catch(err => {
      return res.status(400).json({
        err
      })
    })
  },
  Logout : async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
      where:{
        refresh_token: refreshToken
      }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
      where:{
        id: userId
      }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
  }






}