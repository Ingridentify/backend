const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require ('../controller/userscontroller.js')
const {getRecipesByPredictedItem} = require ('../controller/recipescontroller.js')
// const {uploadOption} = require ('../config/fileUpload.js')
// const {uploadImage} = require ('../controller/ingridientcontroller.js')


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/recipes/predicted-item", getRecipesByPredictedItem)
// router.post("/upload", uploadOption.single('image'), uploadImage)


module.exports = router