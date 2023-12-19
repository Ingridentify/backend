const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require ('../controller/userscontroller.js')
const {getRecipes} = require ('../controller/recipescontroller.js')
const {getProfile} = require('../controller/getProfile.js')
const {editProfile} = require ('../controller/editProfile.js')
const {authToken} = require('../config/auth.js')
const {getRecipesById} = require('../controller/getRecipesById.js')


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile", authToken, getProfile)
router.put("/profile/edit", authToken, editProfile)
router.get("/recipes/:name", authToken, getRecipes)
router.get("/recipes/detail/:id", authToken, getRecipesById)

module.exports = router