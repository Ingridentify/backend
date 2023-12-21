'use strict'

const { UUIDV4 } = require('sequelize')
const { v4: uuidv4, stringify } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [  
      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Banana/bola_bola%20pisang%20coklat.jpg',
            name: 'Banana',
            cuisine: 'Bola-bola pisang cokelat',
            ingridient: JSON.stringify([
                  "6 buah pisang",
                  "1 sdm margarin",
                  "DCC, potong dadu",
                  "5 sdm terigu serbaguna",
                  "Air",
                  "Bread crumbs"
                  ]),
            recipes: JSON.stringify([
                  "1. Kukus pisang 10 menit.",
                  "2. Lumatkan pisang, tambah margarin, aduk rata.",
                  "3. Bentuk adonan pisang, beri isian DCC, bulatkan.",
                  "4. Buat bahan celupan: larutkan tepung terigu dengan air, aduk rata.",
                  "5. Celup adonan pisang di bahan celupan, gulingkan di bread crumbs.",
                  "6. Goreng bola-bola pisang sampai matang.",
                  "7. Bola-bola pisang siap disajikan."
                  ]),
            createdAt: new Date(),
            updatedAt: new Date()
      },
  ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
