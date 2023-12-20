// const axios = require('axios')

// const mlBaseUrl = "https://ml-api-xb5hnzr2ba-et.a.run.app"

// const predictImageMiddleware = async (req, res, next) => {
//   try {
//     const fileData = req.body
//     const mlResponse = await axios.post(`${mlBaseUrl}/ingridentify/predict`, fileData)
//     req.mlPrediction = mlResponse.data
//     next()
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error while predicting image in ML backend' })
//   }
// }

// module.exports = {
//   predictImageMiddleware,
// }