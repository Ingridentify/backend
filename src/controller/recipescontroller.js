const { Recipes } = require('../models')

exports.getRecipes = async (req, res) => {
    try {
        let { name } = req.params

        if (name === undefined || name === null) {
            return res.status(400).json({
                message: "Bad Request"
            });
        }

        const recipes = await Recipes.findAll({
            where: {
                name: name,
            }
        })

        if (!recipes || recipes.length === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }

        return res.status(200).json({
            status: "Success",
            data: {recipes}
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}