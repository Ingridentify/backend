const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require ('../controller/userscontroller.js')
const {getRecipes} = require ('../controller/recipescontroller.js')
const {getProfile} = require('../controller/getProfile.js')
const {editProfile} = require ('../controller/editProfile.js')
const {authToken} = require('../config/auth.js')


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile/:id", authToken, getProfile)
router.put("/profile/edit/:id", authToken, editProfile)
router.get("/recipes/:name", authToken, getRecipes)

module.exports = router