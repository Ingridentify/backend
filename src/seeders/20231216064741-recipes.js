'use strict'

const { UUIDV4 } = require('sequelize')
const { v4: uuidv4, stringify } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [  
      
      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/Sayur_Tumis_Wortel_Bumbu_Bawang.jpg',
            name: 'Carrots',
            cuisine: 'Sayur Tumis Wortel Bumbu Bawang',
            "ingridient": JSON.stringify([
            "2 buah wortel ukuran sedang, kupas dan potong-potong tipis",
            "1 siung bawang putih, haluskan",
            "2 siung bawang merah, haluskan",
            "1 batang daun seledri, cincang",
            "1 sdt gula",
            "1/2 sdt garam dan lada bubuk sejumput",
            "kaldu bubuk"
            ]),
            "recipes": JSON.stringify([
            "1. Tumis bawang hingga harum dan matang.",
            "2. Masukkan wortel dan tuang sedikit air, masak hingga matang.",
            "3. Masukkan gula, garam, lada bubuk, dan kaldu bubuk. Aduk rata.",
            "4. Taburkan potongan daun seledri dan aduk rata. Angkat.",
            "5. Tumis wortel bumbu bawang sederhana siap sajikan hangat."
            ]),
            createdAt: new Date(),
            updatedAt: new Date()
      },

      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/ss/tumis_buncis_wortel_telur.jpg',
            name: 'Carrots',
            cuisine: 'Tumis Buncis Wortel Telur',
            "ingridient": JSON.stringify([
            "10 batang buncis",
            "1 buah wortel",
            "1 butir telur, kocok lepas",
            "4 siung bawang merah, iris tipis",
            "2 siung bawang putih, iris tipis",
            "1 sdt saus tiram (optional)",
            "garam, gula, merica bubuk, dan kaldu bubuk secukupnya"
            ]),
            "recipes": JSON.stringify([
            "1. Siangi buncis dan potong-potong serong atau memanjang.",
            "2. Kupas wortel dan iris korek api.",
            "3. Tumis bawang hingga harum dan mulai kecokelatan, masukkan telur dan buat orak arik.",
            "4. Masukkan sayuran beserta saus tiram, garam, gula, merica bubuk, dan kaldu bubuk secukupnya.",
            "5. Aduk rata, tuang air secukupnya. Masak hingga sayuran empuk.",
            "6. Tes rasa, jika sudah pas, angkat. Sajikan."
            ]),
            createdAt: new Date(),
            updatedAt: new Date()
      },

      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/sop_sayur_wortel.jpg',
            name: 'Carrots',
            cuisine: 'Sop Sayur Wortel',
            "ingridient": JSON.stringify([
            "10 buah bakso sapi",
            "1 buah wortel",
            "1 buah kembang kol",
            "1 buah brokoli",
            "1 buah kentang",
            "1 batang seledri",
            "3 siung bawang putih",
            "2 siung bawang merah",
            "1 batang daun bawang",
            "1/4 sdt lada bubuk",
            "1/4 sdt kaldu bubuk",
            "garam secukupnya",
            "bawang goreng secukupnya"
            ]),
            "recipes": JSON.stringify([
            "1. Potong-potong sayuran sama besar. Rebus air secukupnya, jika sudah mendidih masukkan kentang. Jika sudah setengah matang, masukkan bakso, wortel, kembang kol, dan brokoli.",
            "2. Iris tipis bawang putih, bawang merah, dan daun bawang. Panaskan minyak secukupnya. Tumis hingga harum dan mulai kecokelatan. Angkat.",
            "3. Tuang bumbu ke dalam sayuran rebus bersama daun seledri. Aduk rata.",
            "4. Masukkan lada bubuk, garam, dan lada bubuk secukupnya. Jika sayur sudah matang dan rasanya pas, angkat. Sajikan sayur sop dengan taburan bawang goreng."
            ]),
            createdAt: new Date(),
            updatedAt: new Date()
      },

      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/bakwan_bayam_wortel.jpg',
            name: 'Carrots',
            cuisine: 'Bakwan Bayam Wortel',
            "ingridient": JSON.stringify([
            "1 buah wortel ukuran sedang, serut",
            "1 genggam bayam, rebus dan tiriskan, cincang",
            "1 butir telur",
            "4 sdm tepung terigu",
            "1 sdm tepung beras",
            "2 siung bawang putih, haluskan",
            "1/2 sdt garam",
            "1/2 sdt lada bubuk",
            "1/2 sdt kaldu bubuk",
            "minyak secukupnya"
            ]),
            "recipes": JSON.stringify([
            "1. Campur semua bahan kecuali minyak. Aduk rata hingga rata menjadi adonan kental.",
            "2. Siapkan teflon, beri sedikit minyak, tuang tiap satu sendok makan, pipihkan.",
            "3. Tuang lagi satu sendok makan di sampingnya hingga teflon penuh. Goreng hingga matang, balik. Angkat. Siap sajikan."
            ]),
            createdAt: new Date(),
            updatedAt: new Date()
      },

      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/bakwan_bayam_wortel.jpg',
            name: 'Carrots',
            cuisine: 'Sayur Bening Wortel',
            "ingridient": JSON.stringify([
            "5 tangkai daun kelor muda (siangi, ambil daunnya saja)",
            "2 buah wortel (iris bulat tipis)",
            "4 siung bawang putih (memarkan)",
            "1 sdm bawang merah goreng",
            "Garam, gula, penyedap, dan air (secukupnya)"
            ]),
            "recipes": JSON.stringify([
            "1. Panaskan air hingga mendidih, kemudian masukkan bawang putih, rebus hingga harum.",
            "2. Tambahkan wortel ke dalam rebusan bawang putih, masak hingga mendidih dan empuk.",
            "3. Masukkan daun kelor, masak hingga daun layu.",
            "4. Tambahkan garam, gula, penyedap masakan, dan bawang merah goreng.",
            "5. Koreksi rasa, masak semua bahan hingga mendidih dan matang.",
            "6. Sayur bening daun kelor siap untuk disajikan bersama nasi putih dan lauk ikan goreng serta sambal."
            ]),
            createdAt: new Date(),
            updatedAt: new Date()
      },

      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/tumis_wortel_buncis.jpg',
            name: 'Carrots',
            cuisine: 'Tumis Wortel Buncis',
            "ingridient": JSON.stringify([
            "100 gram buncis",
            "100 gram wortel",
            "3 butir telur",
            "50 ml air",
            "Minyak goreng secukupnya",
            "3 siung bawang putih",
            "3 siung bawang merah",
            "3 buah cabai rawit merah",
            "1 batang daun bawang",
            "1 sdt ebi",
            "1 sdt kecap ikan",
            "1 sdt lada bubuk",
            "Gula pasir secukupnya"
            ]),
            "recipes": JSON.stringify([
            "1. Siapkan wajan di atas kompor, lalu tuang sedikit minyak ke dalamnya. Panaskan sebentar dan masukkan cincangan bawang merah dan bawang putih. Tumis hingga layu.",
            "2. Tambahkan potongan buncis dan wortel ke dalam tumisan. Aduk-aduk sampai kedua sayuran tersebut melunak.",
            "3. Tuangkan air secukupnya ke dalam masakan. Tumis sesekali sampai airnya meresap. Jika sudah, sisihkan tumisan buncis dan wortel ke pinggir wajan.",
            "4. Masukkan kocokan telur ke dalam wajan dan aduk sampai menjadi orak-arik. Satukan kembali tumisan sayur dengan telur.",
            "5. Tambahkan ebi, cabai rawit, lada bubuk, kecap ikan, garam, gula pasir, dan daun bawang. Aduk sampai merata dan termasak matang.",
            "6. Jika sudah matang, segera matikan kompor dan sajikan tumis buncis wortel dengan nasi putih."
            ]),
            createdAt: new Date(),
            updatedAt: new Date()
      }, 

      {
            id: uuidv4(),
            urlImage: 'https://storage.googleapis.com/ingridentify-image/foto-masakan/Carrots/wortel_goreng.jpg',
            name: 'Carrots',
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
            name: 'Carrots',
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
      
  ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
