const { Users } = require('../models');
const { hashPassword, comparePasswords } = require('../config/hashPw.js');
const jwt = require('jsonwebtoken');

const jwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

exports.registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Bad Request' });
    }

    const hashedPassword = await hashPassword(password);

    const newUsers = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwtToken(newUsers.id);

    return res.status(201).json({
      message: 'Successfully Register',
      token,
      data: newUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Validation Error',
      error: error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Please input email or password',
      });
    }

    const userData = await Users.findOne({ where: { email: email } });

    if (
      !userData ||
      !(await comparePasswords(password, userData.password))
    ) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Error Login',
        error: 'Invalid email or password',
      });
    }

    const token = jwtToken(userData.id);

    return res.status(202).json({
      status: 'Success',
      message: 'Login Success',
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      message: 'Internal Server Error',
      data: error,
    });
  }
};

// const {Users} = require('../models')
// const jwt = require('jsonwebtoken')

// const jwtToken = id => {
//     return jwt.sign({id}, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRE
//     })
// }
// exports.registerUser = async(req, res) => {
//     try {
//         let { name, email, password } = req.body

//         if (!name || !email || !password){
//             return res.status(400).json({error: "Bad Request"})
//         }

//         const newUsers = await Users.create({
//             name,
//             email,
//             password
//         })

//         const token = jwtToken(newUsers.id)

//         return res.status(201).json({
//             message: "Successfully Register",
//             token,
//             data: newUsers
//         })

//     } catch (error) {
//         console.log(error)
//         res.status(400).json({
//             message: "Validation Error",
//             error: error
//         })
//     }
// }

// exports.loginUser = async(req, res) => {
//     try {
//         let {email, password} = req.body

//         if (!email || !password){
//             return res.status(400).json({
//                 error: "Bad Request",
//                 message: "Please input email or password"
//             })
//         }

//         const userData = await Users.findOne({where: {email: email}})

//         if(!userData || !(await userData.correctPw(password, userData.password))){
//             return res.status(400).json({
//                 status: "Failed",
//                 message: "Error Login",
//                 error: "Invalid email or password"
//             })
//         }

//         const token = jwtToken(userData.id)

//         return res.status(202).json({
//             status: "Success",
//             message: "Login Success",
//             token
//         })

//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ 
//             error: true, 
//             message: 'Internal Server Error', 
//             data: error 
//         })
//     }
// }
