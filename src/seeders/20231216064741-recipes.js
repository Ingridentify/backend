'use strict'

const { UUIDV4 } = require('sequelize')
const { v4: uuidv4, stringify } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [  

  {
        id: uuidv4(),
        urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/wortel_goreng.jpg',
        name: 'Carrot',
        cuisine: 'Wortel Goreng',
        ingridient: JSON.stringify([
              "300 gram wortel, potong memanjang",
              "30 gram tepung beras",
              "30 gram tepung sagu",
              "100 gram tepung terigu",
              "2 butir kemiri sangrai",
              "2 siung bawang putih",
              "1 sdt ketumbar",
              "50 ml air",
              "garam secukupnya",
              "gula pasir secukupnya",
              "lada bubuk secukupnya",
              "minyak sayur secukupnya"
              ]),
        recipes: JSON.stringify([
              "1.Campurkan garam, gula pasir, dan lada bubuk ke dalam satu wadah. Aduk sampai tercampur rata.",
              "2.Tambahkan dengan tepung terigu, tepung beras, dan tepung sagu. Aduk kembali sampai merata.",
              "3.Tuang banyak minyak goreng ke dalam wajan. Nyalakan kompor dan panaskan minyak hingga mendidih.",
              "4.Guling-gulingkan potongan wortel ke dalam adonan tepung, pastikan terbaluri dengan merata.",
              "6.Goreng wortel ke dalam minyak panas sampai matang dan kering. Jika sudah, segera angkat dan tiriskan.",
              "7.Wortel goreng sudah bisa kamu sajikan dengan saus sambal atau tomat."
              ]),
        createdAt: new Date(),
        updatedAt: new Date()
  },
  
  {
        id: uuidv4(),
        urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/tumis_kembang_kol_wortel.jpg',
        name: 'Carrot',
        cuisine: 'Tumis kembang kol wortel',
        ingridient: JSON.stringify([
              "1 buah kembang kol, potong sesuai selera",
              "3 buah wortel, potong miring",
              "7 siung bawang merah, iris tipis",
              "5 siung bawang putih, iris tipis",
              "Garam secukupnya",
              "Gula secukupnya",
              "Lada secukupnya"
              ]),
        recipes: JSON.stringify([
              "1. Masak air dalam panci sampai mendidih masukkan kembang kol kira-kira 3 menit lalu angkat dan tiriskan.",
              "2. Tumis bawang merah dan bawang putih sampai harum lalu masukkan wortel beri air sedikit masak sampai wortel matang.",
              "3. Lalu masukkan kembang kol, garam, gula, lada, dan kecap asin. Masak sampai matang. Koreksi rasa, angkat dan hidangkan."
              ]),
        createdAt: new Date(),
        updatedAt: new Date()
  },
  
  {
      id: uuidv4(),
      urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Cauliflower/tumis_kembang_kol_wortel.jpg',
      name: 'Cauliflower',
      cuisine: 'Tumis kembang kol wortel',
      ingridient: JSON.stringify([
            "1 buah kembang kol, potong sesuai selera",
            "3 buah wortel, potong miring",
            "7 siung bawang merah, iris tipis",
            "5 siung bawang putih, iris tipis",
              "Garam secukupnya",
            "Gula secukupnya",
            "Lada secukupnya"
            ]),
      recipes: JSON.stringify([
            "1. Masak air dalam panci sampai mendidih masukkan kembang kol kira-kira 3 menit lalu angkat dan tiriskan.",
            "2. Tumis bawang merah dan bawang putih sampai harum lalu masukkan wortel beri air sedikit masak sampai wortel matang.",
            "3. Lalu masukkan kembang kol, garam, gula, lada, dan kecap asin. Masak sampai matang. Koreksi rasa, angkat dan hidangkan."
            ]),
      createdAt: new Date(),
      updatedAt: new Date()
  },
  
  {
        id: uuidv4(),
        urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Cauliflower/tumis_kembang_kol_kuah_udang.jpg',
        name: 'Cauliflower',
        cuisine: 'Tumis kembang kol kuah udang',
        ingridient: JSON.stringify([
              "2 buah kembang kol. Siangi lalu rendam air garam.",
              "200 gr udang ukuran sedang. Kupas sisa ekor dan kepala (sisihkan kulitnya)",
              "3 siung bawang putih geprek",
              "2 cabai merah besar, iris serong",
              "1/2 sdt minyak wijen",
              "1/2 sdt merica bubuk",
              "1 sdm margarin",
              "Gula dan garam",
              "500 ml air"
              ]),
        recipes: JSON.stringify([
              "1. Rebus air, setelah mendidih masukkan kulit udang, diamkan sampai kaldunya keluar. Lalu saring.",
              "2. Panaskan margarin, tumis bawang putih dan garam. Jika sudah wangi, masukkan merica, udang dan cabai merah. Tunggu hingga ada air kaldu dari udang yang keluar.",
              "3. Tuang kaldu udang dan minyak wijen, beri sedikit gula. Aduk sebentar. Kemudian masukkan kembang kol. Koreksi rasa. Tambahkan garam bila kurang asin.",
              "4. Sajikan."
              ]),
        createdAt: new Date(),
        updatedAt: new Date()
  },
  
  {
        id: uuidv4(),
        urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Cauliflower/tumis_kembang_kol_bawang_putih.jpg',
        name: 'Cauliflower',
        cuisine: 'Tumis Kembang Kol Bawang Putih',
        ingridient: JSON.stringify([
        "Kembang kol",
        "Bawang putih",
        "Garam",
        "Merica",
        "Minyak goreng"
        ]),
        recipes: JSON.stringify([
        "1. Iris tipis kembang kol, kemudian tumis bawang putih hingga harum.",
        "2. Masukkan kembang kol, aduk rata dan tumis hingga layu.",
        "3. Tambahkan garam dan merica secukupnya.",
        "4. Masak hingga matang dan sajikan."
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
  },
  
  {
        id: uuidv4(),
        urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Cauliflower/tumis_kembang_kol_saos_tomat.jpg',
        name: 'Cauliflower',
        cuisine: 'Tumis Kembang Kol Saus Tomat',
        ingridient: JSON.stringify([
        "1 buah kembang kol, potong sesuai selera",
        "3 buah wortel, potong miring",
        "7 siung bawang merah, iris tipis",
        "5 siung bawang putih, iris tipis",
        "Garam secukupnya",
        "Gula secukupnya",
        "Lada secukupnya"
        ]),
        recipes: JSON.stringify([
        "1. Masak air dalam panci sampai mendidih masukkan kembang kol kira-kira 3 menit lalu angkat dan tiriskan.",
        "2. Tumis bawang merah dan bawang putih sampai harum lalu masukkan wortel beri air sedikit masak sampai wortel matang.",
        "3. Lalu masukkan kembang kol, garam, gula, lada, dan kecap asin. Masak sampai matang. Koreksi rasa, angkat dan hidangkan."
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
  },
  
  {
        id: uuidv4(),
        urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Cauliflower/tumis_kembang_kol_ayam_paprika.jpg',
        name: 'Cauliflower',
        cuisine: 'Tumis Kembang Kol Ayam Paprika',
        ingridient: JSON.stringify([
              "150 gr ayam fillet, iris",
              "1 buah kembang kol kecil",
              "1 buah wortel, iris serong",
              "1/4 paprika merah",
              "1/4 paprika hijau",
              "2 buah bawang putih, cincang",
              "3 buah bawang merah, cincang",
              "1 batang daun bawang",
              "1 sdt kecap ikan",
              "1 sdm saus tomat",
              "1 sdm saus tiram",
              "Garam, merica, gula pasir secukupnya",
              "Air secukupnya",
              "2 sdm air larutan maizena"
              ]),
        recipes: JSON.stringify([
              "1. Lepaskan kembang kol dari kuntumnya, cuci lalu rendam sebentar dengan air garam, bilas sisihkan.",
              "2. Tumis bawang merah dan bawang putih lalu masukkan ayam, aduk hingga ayam berubah warna masukkan kembang kol, wortel serta paprika aduk rata, tuangkan air.",
              "3. Beri semua bumbu, aduk rata, tunggu beberapa saat hingga matang, tes rasa, beri larutan maizena biarkan hingga meletup, tambahkan daun bawang, aduk, angkat, sajikan."
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
