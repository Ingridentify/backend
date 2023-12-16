// recipesController.js
const { Recipes } = require('../models')
const { processImageAndGetPrediction } = require('./imageProcessing')

exports.getRecipesByPredictedItem = async (req, res) => {
    try {
        // Panggil fungsi untuk mendapatkan hasil prediksi
        const predictedItem = await processImageAndGetPrediction()

        if (!predictedItem) {
            return res.status(400).json({
                error: "Failed to get predicted item",
            })
        }

        // Gunakan hasil prediksi sebagai parameter untuk mengambil data resep
        const recipes = await Recipes.findAll({
            attributes: ['cuisine', 'recipes'],
            where: {
                name: predictedItem,
            }
        })

        if (!recipes || recipes.length === 0) {
            return res.status(400).json({ error: "Recipe not found" })
        }

        return res.status(200).json({
            status: "Success",
            data: { predictedItem },
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Server Error",
            error: error,
        })
    }
}



// exports.getRecipes = async (req, res) => {
//     try {
//         let { name } = req.params;

//         if (!name) {
//             return res.status(400).json({
//                 error: "Bad Request"
//             })
//         }

//         const recipes = await Recipes.findAll({
//             attributes: ['cuisine', 'recipes'],
//             where: {
//                 name: name,
//             }
//         })

//         if (!recipes || recipes.length === 0) {
//             return res.status(400).json({ error: "Recipe not found" });
//         }

//         return res.status(200).json({
//             status: "Success",
//             data: {recipes}
//         })

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message: "Server Error",
//             error: error
//         })
//     }
// }
