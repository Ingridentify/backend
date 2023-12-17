const {Users} = require('../models')
const {hashPassword, comparePasswords} = require('../config/hashPw.js')

exports.editProfile = async (req, res) => {
    try {
      let { id } = req.params
      const user = await Users.findByPk(id)
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
  
      const updatedFields = {
        name: req.body.name || user.name,
        email: req.body.email || user.email,
      }
  
      if (req.body.password) {
        const isValidPassword = await comparePasswords(req.body.currentPass, user.password)
  
        if (!isValidPassword) {
          return res.status(400).json({ error: 'Invalid current password' })
        }
  
        const hashedPassword = await hashPassword(req.body.password)
        updatedFields.password = hashedPassword
      }
  
      await user.update(updatedFields);
  
      const userProfile = {
        id: user.id,
        name: user.name,
        email: user.email
      }
  
      res.json(userProfile)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }