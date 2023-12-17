const { Users } = require('../models')

exports.getProfile = async (req, res) => {
    try {
      let { id } = req.params

        if(!id) {
            return res.status(404).json({
                message: "Bad Request"
            })
        }

        const user = await Users.findByPk(id, {
            attributes: ['id', 'name', 'email'],
          })

        if(!user || user.length === 0){
            return res.status(404).json({error: "User Not Found"})
        }

        return res.status(200).json({
            status: "Success",
            data: {user}
        })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }