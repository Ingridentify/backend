const { Recipes } = require('../models')

exports.getRecipesById = async (req, res) => {
    try {
      let { id } = req.params

      if (id === undefined || id === null) {
        return res.status(400).json({
            message: "Bad Request"
        })
    }

        const recipes = await Recipes.findByPk(id)

        if(!recipes || recipes.length === 0){
            return res.status(404).json({error: "Recipes Not Found"})
        }

        return res.status(200).json({
            status: "Success",
            data: {recipes}
        })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }