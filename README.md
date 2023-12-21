# Cloud Computing Team Members
| Bangkit ID | Name | Learning Path | University | Contact |
| ---------- | ---- | ------------- | ---------- | ------- |
| C296BSY4285 | Zandy Qois | Cloud Computing | Universitas Pembangunan Nasional "Veteran" Jawa Timur | https://www.linkedin.com/in/zandyqois/ |
| C296BSX3753 | Adinda Putri Budi Saraswati | Cloud Computing | Universitas Pembangunan Nasional "Veteran" Jawa Timur | https://www.linkedin.com/in/adinda-putri-budi-saraswati/ |

# Introduction
Ingridentify is an Android application supported with a REST API using the ExpressJs Framework for Node.js and CloudSQL as the database. This API is then being deployed using Google Cloud Run. Moreover, Cloud Storage service is used as a storage for multimedia images required by the android application that can be accessed using a direct access link to bucket location of the images.

# Deployment
- Google Cloud Platform (GCP)
  - Google Cloud Run
  - Google Cloud Build

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
  - /ingridentify/recipes/Apple
- Method:
  - GET
- Request Header:
  - Authorization (Bearer Token)
- Response:
```sh
  {
  "status": "Success",
  "data": {
    "recipes": [
      {
        "id": "xxxxxxxxxx-83b0-495f-aa9c-xxxxxxxxxxxxx",
        "name": "Apple",
        "cuisine": "Fried Apple Pie",
        "recipes": "Bahan adonan isi:\n      - 100 g apel malang\n      - 100 ml air\n      - 2 cm kayu manis batangan\n      - 3 sdm gula pasir\n      - 2 sdt kayu manis bubuk\n      - 2 sdm tepung maizena\n      - sedikit garam\n      Adonan kulit:\n      - 220 g tepung terigu\n      - 1 sdt garam\n      - 70 g mentega\n      - 4-5 sdm susu cair\n      - tepung terigu untuk taburan\n      Bahan lain:\n      - air untuk mengoles pie\n      - minyak goreng\n      \n      Cara membuat:\n      1. Isian: kupas apel, potong lalu bentuk dadu. Rebus bersama kayu manis hingga setengah matang. Beri gula dan kayu manis bubuk, aduk sampai leleh\n      2. Larutkan maizena dan garam, masukkan ke adonan isian apel\n      3. Kulit: campur tepung dan garam. Masukkan mentega, aduk rata. Perciki susu cair sambil diaduk. Padatkan dan bentuk bola, bungkus dengan plastik, simpan di lemari es selama 15 menit\n      3. Gilas adonan setebal 3 mm lalu taburi tepung. Iris adonan jadi segi empat ukuran 12x12 cm\n      4. Ambil selembar kulit, beri 2 sdt isian. Olesi pinggiran kulit dengan sedikit air lalu lipat dua\n      5. Tekan-tekan pinggirannya dengan garpu. Goreng pie hingga matang.\n      ",
        "createdAt": "2023-12-19T14:26:35.000Z",
        "updatedAt": "2023-12-19T14:26:35.000Z"
      }
    ]
  }
}
```

### Recipe Recommendation Details by Id
- URL:
  - /ingridentify/recipes/detail/6dbeb178-83b0-495f-aa9c-a209588d2587
- Method:
  - GET
- Request Header:
  - Authorization (Bearer Token)
- Response:
```sh
  {
  "status": "Success",
  "data": {
    "recipes": {
      "id": "xxxxxx-83b0-495f-aa9c-xxxxxxxxxxxxx",
      "name": "Apple",
      "cuisine": "Fried Apple Pie",
      "recipes": "Bahan adonan isi:\n      - 100 g apel malang\n      - 100 ml air\n      - 2 cm kayu manis batangan\n      - 3 sdm gula pasir\n      - 2 sdt kayu manis bubuk\n      - 2 sdm tepung maizena\n      - sedikit garam\n      Adonan kulit:\n      - 220 g tepung terigu\n      - 1 sdt garam\n      - 70 g mentega\n      - 4-5 sdm susu cair\n      - tepung terigu untuk taburan\n      Bahan lain:\n      - air untuk mengoles pie\n      - minyak goreng\n      \n      Cara membuat:\n      1. Isian: kupas apel, potong lalu bentuk dadu. Rebus bersama kayu manis hingga setengah matang. Beri gula dan kayu manis bubuk, aduk sampai leleh\n      2. Larutkan maizena dan garam, masukkan ke adonan isian apel\n      3. Kulit: campur tepung dan garam. Masukkan mentega, aduk rata. Perciki susu cair sambil diaduk. Padatkan dan bentuk bola, bungkus dengan plastik, simpan di lemari es selama 15 menit\n      3. Gilas adonan setebal 3 mm lalu taburi tepung. Iris adonan jadi segi empat ukuran 12x12 cm\n      4. Ambil selembar kulit, beri 2 sdt isian. Olesi pinggiran kulit dengan sedikit air lalu lipat dua\n      5. Tekan-tekan pinggirannya dengan garpu. Goreng pie hingga matang.\n      ",
      "createdAt": "2023-12-19T14:26:35.000Z",
      "updatedAt": "2023-12-19T14:26:35.000Z"
    }
  }
}
```
