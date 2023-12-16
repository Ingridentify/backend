// imageProcessing.js
const fetch = require('node-fetch')
const fs = require('fs')

async function processImageAndGetPrediction(imagePath) {
    try {
        const formData = new FormData()
        formData.append('file', fs.createReadStream(imagePath))

        const response = await fetch('http://fastapi-url/predict', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()

        if (response.ok) {
            const predictedItem = data.predicted_item
            return predictedItem
        } else {
            throw new Error(data.error)
        }
    } catch (error) {
        console.error('Error:', error.message)
        throw error
    }
}

module.exports = {
    processImageAndGetPrediction,
}
