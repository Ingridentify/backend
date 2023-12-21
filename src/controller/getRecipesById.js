const { Recipes } = require('../models')

exports.getRecipesById = async (req, res) => {
    try {
        let { id } = req.params

        if (id === undefined || id === null) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        const recipe = await Recipes.findByPk(id)

        if (!recipe) {
            return res.status(404).json({ error: "Recipe Not Found" })
        }

        const formattedRecipe = {
            id: recipe.id,
            urlImage: recipe.urlImage,
            name: recipe.name,
            cuisine: recipe.cuisine,
            ingridient: JSON.parse(recipe.ingridient),
            recipes: JSON.parse(recipe.recipes)
        }

        return res.status(200).json({
            status: "Success",
            data: formattedRecipe
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
