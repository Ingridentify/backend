# Cloud Computing Team Members
| Bangkit ID | Name | Learning Path | University | Contact |
| ---------- | ---- | ------------- | ---------- | ------- |
| C296BSY4285 | Zandy Qois | Cloud Computing | Universitas Pembangunan Nasional "Veteran" Jawa Timur | https://www.linkedin.com/in/zandyqois/ |
| C296BSX3753 | Adinda Putri Budi Saraswati | Cloud Computing | Universitas Pembangunan Nasional "Veteran" Jawa Timur | https://www.linkedin.com/in/adinda-putri-budi-saraswati/ |

# Introduction
Ingridentify is an Android application supported with a REST API using the ExpressJs Framework for Node.js and CloudSQL as the database. This API is then being deployed using Google Cloud Run. Moreover, Cloud Storage service is used as a storage for multimedia images required by the android application that can be accessed using a direct access link to bucket location of the images.

# Deployment
To deploy this application, we use Google Cloud Platform services such as: 
  - Google Cloud Run
  - Google Cloud Build
    
# Replicate Our Work
You can follow these steps if you want to replicate our work.
1. Create new Google Cloud project
2. Enable Cloud Run API, Cloud Build API, and CloudSQL API
3. Install and initialize the Google Cloud SDK to create a container
4. Create SQL instance on CloudSQL
5. Configure your SQL instance to be accessible through the internet (we will use a public IP)
6. Connect to the SQL instance and create the database and tables using the command below:
```sh
CREATE DATABASE Ingridentify;

CREATE TABLE Recipes (
  id UUID PRIMARY KEY DEFAULT UUIDV4,
  urlImage VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  cuisine VARCHAR(255) NOT NULL,
  ingridient TEXT NOT NULL,
  recipes TEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NOT NULL
);

CREATE TABLE Users (
  id UUID PRIMARY KEY DEFAULT UUIDV4,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NOT NULL
);
```
8. Fill the database that has been created with the data 
9. Clone Ingridentify-CC repository
```sh
git clone https://github.com/Ingridentify/backend.git
```
Then, go to the Ingridentify-CC folder
```sh
cd backend
```
10. Run this command to deploy to google cloud run:
```sh
- gcloud builds submit --tag gcr.io/<Project ID>/<Service Name>
- gcloud run deploy --image gcr.io/<Project ID>/<Service Name> --platform managed
```

# Library
Libraries used for developing Ingridentify:
- ExpressJS
- bcryptjs
- cors
- dotenv
- Jsonwebtoken (JWT)
- Nodemon
- mysql2
- sequelize
- sequelize-cli
- uuid

# API Endpoint
- Cloud Run:
  - Backend: https://ingridentify-api-xb5hnzr2ba-et.a.run.app
  - Machine Learning API: https://ml-api-xb5hnzr2ba-et.a.run.app
- API Documentation and Testing: https://documenter.getpostman.com/view/31553241/2s9Ykoe2X1

# API List
### User Registration
- URL:
  - /ingridentify/register
- Method:
  - POST
- Request Body:
  - name
  - email
  - password
- Response:
```sh
  {
  "message": "Successfully Register",
  "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "data": {
    "id": "xxxxxxxxxx-3e2c-4023-800c-xxxxx",
    "name": "xxx",
    "email": "xxx@gmail.com",
    "password": "xxx",
    "updatedAt": "2023-12-19T18:24:16.324Z",
    "createdAt": "2023-12-19T18:24:16.324Z"
  }
}
```

### User Login
- URL:
  - /ingridentify/login
- Method:
  - POST
- Request Body:
  - email
  - password
- Response:
```sh
  {
  "status": "Success",
  "message": "Login Success",
  "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "userData": {
    "id": "xxxxxxxx-3e2c-4023-800c-xxxxxxxxx",
    "name": "xxx",
    "email": "xxx@gmail.com",
    "password": "xxx",
    "createdAt": "2023-12-19T18:24:16.000Z",
    "updatedAt": "2023-12-19T18:24:16.000Z"
  }
}
```

### Display User Profile
- URL:
  - /ingridentify/profile
- Method:
  - GET
- Request Header:
  - Authorization (Bearer Token)
- Response:
```sh
  {
  "status": "Success",
  "data": {
    "user": {
      "id": "xxxxxxxx-3e2c-4023-800c-xxxxx",
      "name": "xxx",
      "email": "xxx@gmail.com"
    }
  }
}
```

### Edit User Profile
- URL:
  - /ingridentify/profile/edit
- Method:
  - PUT
- Request Header:
  - Authorization (Bearer Token)
- Request Body:
  - name
  - email
  - password
  - currentPass
- Response:
```sh
{
  "id": "xxxxx-3e2c-4023-800c-xxxxxxxx",
  "name": "xxx",
  "email": "xxx@gmail.com"
}
```

### Scanning Image
- URL:
  - /ingridentify/predict
- Method:
  - POST
- Request Body:
  - image file (.png / .jpg / .jpeg)
- Response:
```sh
{
  "predicted_item": "Broccoli",
  "confidence": "99.04"
}
```

### Recipe Recommendations
- URL:
  - /ingridentify/recipes/:name
- Method:
  - GET
- Request Header:
  - Authorization (Bearer Token)
- Response:
```sh
  {
  "status": "Success",
  "data": [
    {
      "id": "xxxxxxxxxx-fc1f-4ec2-be8e-xxxxx",
      "urlImage": "https://storage.googleapis.com/.............../Cauliflower/tumis_kembang_kol_wortel.jpg",
      "name": "Cauliflower",
      "cuisine": "Tumis kembang kol wortel",
      "ingridient": [
        "1 buah kembang kol, potong sesuai selera",
        "3 buah wortel, potong miring",
        "7 siung bawang merah, iris tipis",
        "5 siung bawang putih, iris tipis",
        "Garam secukupnya",
        "Gula secukupnya",
        "Lada secukupnya"
      ],
      "recipes": [
        "1. Masak air dalam panci sampai mendidih masukkan kembang kol kira-kira 3 menit lalu angkat dan tiriskan.",
        "2. Tumis bawang merah dan bawang putih sampai harum lalu masukkan wortel beri air sedikit masak sampai wortel matang.",
        "3. Lalu masukkan kembang kol, garam, gula, lada, dan kecap asin. Masak sampai matang. Koreksi rasa, angkat dan hidangkan."
      ]
    },
    {
      "id": "xxxx-e992-421b-87ab-xxxxxxxx",
      "urlImage": "https://storage.googleapis.com/............/Cauliflower/tumis_kembang_kol_bawang_putih.jpg",
      "name": "Cauliflower",
      "cuisine": "Tumis Kembang Kol Bawang Putih",
      "ingridient": [
        "Kembang kol",
        "Bawang putih",
        "Garam",
        "Merica",
        "Minyak goreng"
      ],
      "recipes": [
        "1. Iris tipis kembang kol, kemudian tumis bawang putih hingga harum.",
        "2. Masukkan kembang kol, aduk rata dan tumis hingga layu.",
        "3. Tambahkan garam dan merica secukupnya.",
        "4. Masak hingga matang dan sajikan."
      ]
    },
    {
      "id": "xxxx-3eed-4e60-b137-xxxxxxxx",
      "urlImage": "https://storage.googleapis.com/................/Cauliflower/tumis_kembang_kol_kuah_udang.jpg",
      "name": "Cauliflower",
      "cuisine": "Tumis kembang kol kuah udang",
      "ingridient": [
        "2 buah kembang kol. Siangi lalu rendam air garam.",
        "200 gr udang ukuran sedang. Kupas sisa ekor dan kepala (sisihkan kulitnya)",
        "3 siung bawang putih geprek",
        "2 cabai merah besar, iris serong",
        "1/2 sdt minyak wijen",
        "1/2 sdt merica bubuk",
        "1 sdm margarin",
        "Gula dan garam",
        "500 ml air"
      ],
      "recipes": [
        "1. Rebus air, setelah mendidih masukkan kulit udang, diamkan sampai kaldunya keluar. Lalu saring.",
        "2. Panaskan margarin, tumis bawang putih dan garam. Jika sudah wangi, masukkan merica, udang dan cabai merah. Tunggu hingga ada air kaldu dari udang yang keluar.",
        "3. Tuang kaldu udang dan minyak wijen, beri sedikit gula. Aduk sebentar. Kemudian masukkan kembang kol. Koreksi rasa. Tambahkan garam bila kurang asin.",
        "4. Sajikan."
      ]
    },
    {
      "id": "xxxxxxxx-7dbe-4e5b-aa79-xxxxxxxx",
      "urlImage": "https://storage.googleapis.com/......./Cauliflower/tumis_kembang_kol_ayam_paprika.jpg",
      "name": "Cauliflower",
      "cuisine": "Tumis Kembang Kol Ayam Paprika",
      "ingridient": [
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
      ],
      "recipes": [
        "1. Lepaskan kembang kol dari kuntumnya, cuci lalu rendam sebentar dengan air garam, bilas sisihkan.",
        "2. Tumis bawang merah dan bawang putih lalu masukkan ayam, aduk hingga ayam berubah warna masukkan kembang kol, wortel serta paprika aduk rata, tuangkan air.",
        "3. Beri semua bumbu, aduk rata, tunggu beberapa saat hingga matang, tes rasa, beri larutan maizena biarkan hingga meletup, tambahkan daun bawang, aduk, angkat, sajikan."
      ]
    },
    {
      "id": "xxxx-3388-4fcb-afcf-xxxxx",
      "urlImage": "https://storage.googleapis.com/.../Cauliflower/tumis_kembang_kol_saos_tomat.jpg",
      "name": "Cauliflower",
      "cuisine": "Tumis Kembang Kol Saus Tomat",
      "ingridient": [
        "1 buah kembang kol, potong sesuai selera",
        "3 buah wortel, potong miring",
        "7 siung bawang merah, iris tipis",
        "5 siung bawang putih, iris tipis",
        "Garam secukupnya",
        "Gula secukupnya",
        "Lada secukupnya"
      ],
      "recipes": [
        "1. Masak air dalam panci sampai mendidih masukkan kembang kol kira-kira 3 menit lalu angkat dan tiriskan.",
        "2. Tumis bawang merah dan bawang putih sampai harum lalu masukkan wortel beri air sedikit masak sampai wortel matang.",
        "3. Lalu masukkan kembang kol, garam, gula, lada, dan kecap asin. Masak sampai matang. Koreksi rasa, angkat dan hidangkan."
      ]
    }
  ]
}
```

### Recipe Recommendation Details by Id
- URL:
  - /ingridentify/recipes/detail/:id
- Method:
  - GET
- Request Header:
  - Authorization (Bearer Token)
- Response:
```sh
  {
  "status": "Success",
  "data": {
    "id": "xxxxxxxxx-e992-421b-87ab-xxxxxxxxxx",
    "urlImage": "https://storage.googleapis.com/..../Cauliflower/tumis_kembang_kol_bawang_putih.jpg",
    "name": "Cauliflower",
    "cuisine": "Tumis Kembang Kol Bawang Putih",
    "ingridient": [
      "Kembang kol",
      "Bawang putih",
      "Garam",
      "Merica",
      "Minyak goreng"
    ],
    "recipes": [
      "1. Iris tipis kembang kol, kemudian tumis bawang putih hingga harum.",
      "2. Masukkan kembang kol, aduk rata dan tumis hingga layu.",
      "3. Tambahkan garam dan merica secukupnya.",
      "4. Masak hingga matang dan sajikan."
    ]
  }
}
```

