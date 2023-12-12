const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require ('../controller/userscontroller.js')
const {getRecipes} = require ('../controller/recipescontroller.js')


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/recipes/:name", getRecipes)


module.exports = router