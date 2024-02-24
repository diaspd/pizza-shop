<h1 align="center">
   Pizza Shop
</h1> 

<div align="center">
  <b>
    <a href="#-Technologies"><b>Technologies</b></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-Project"><b>Project</b></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-Layout"><b>Layout</b></a>&nbsp;&nbsp;&nbsp;
  </b>  
</div>

---

<div align="center">
   <img alt="project img" title="image" src="" width="100%"/>
</div> 

</br>

## 🚀 Getting started

Clone the project and access the folder.

```bash
$ git clone https://github.com/diaspd/pizza-shop.git
$ cd 
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run dev
```

## Running the test

```bash
$ npm run dev:test
```

## Setting the app web
To connect to api you'll need to create a `.env.local` file and add 

```
 VITE_API_URL="http://localhost:3333"
 VITE_ENABLE_API_DELAY=true
```
To access the app on page sign-in use the email `diego.schell.f@gmail.com` and the link will be sent on server.

</br>

To use local API (Mocks)
add a `.env.test` file with this settings:  
```
VITE_API_URL="/"
VITE_ENABLE_API_DELAY=false
```
The app will be available on `http://localhost:5173/`

</br>

## 🚀 Getting started (API)

Clone the app api project and access the folder.

```bash
$ git clone https://github.com/rocketseat-education/pizzashop-api
$ cd 
```

## Setting the app api

add a ".env.local" file with this settings:  
```
 API_BASE_URL="http://localhost:3333"
 AUTH_REDIRECT_URL="http://localhost:5173"

 DB_URL="postgresql://docker:docker@localhost:5432/pizzashop"

 JWT_SECRET_KEY="my-super-secret-key"

 RESEND_API_KEY="."
```

## Running the Docker and APP
```
$ bun i
$ docker compose up -d
$ bun migrate
$ bun seed
$ bun dev
```

The app will be available on ``

<br></br>

## 💻 Technologies

This project was developed with the following technologies:
<b>
- React
</b>

</br>

## 📄 Project
💰 .


<br></br>

Made with ♥ by Pedro Dias. 👋 Follow me on social media! </br>

If you can give a little star, I appreciate it 🤩
