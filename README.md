# **Workspace Reservation System SPA**

## 📖 Desciption

This a project managment program that allows a bussines to keep track of their new projects, and to define the status of each one while also allowing them to edit and delete as they please on their project


## 🚀 Used Technologies

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Tailwind CSS / Bootstrap
* Axios / Fetch API
* JSON Server
* LocalStorage
* Vite
* Node.js

---

## 📂 Project structure

```text
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── README.md
├── src
│   ├── api
│   │   └── http.js
│   ├── assets
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── components
│   │   ├── ReservationCard.js
│   │   └── Sidebar.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   └── login.controller.js
│   ├── main.js
│   ├── router
│   │   └── router.js
│   ├── services
│   │   └── reservation.service.js
│   ├── style.css
│   ├── utils.js
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       └── notFound.js
└── vite.config.js
```

---

## ⚙️ Needed things

* Node.js
* npm
* Git

Verify installation

```bash
node -v
npm -v
git --version
```

---

## 📥 How to use

Clone repository:

```bash
git clone [URL_DEL_REPOSITORIO]
```

Enter the project:

```bash
cd [NOMBRE_PROYECTO]
```

Install dependencies :

```bash
npm install
```

---

## ▶️ How to run

### Development 

```bash
npm run dev
```

### Simulated Backend(JSON Server)

```bash
npm run auth
```

```bash
npm run data
```

### Run everything

```bash
npm start
```

---

## 🗄️ Data base

### auth-db.json

```json
{
  "users": []
}
```

### data-db.json

```json
{
  "data": []
}
```

---
functionalities

-Login 
-Dashboard with all the task
-Allows to update all the information
-Lets the admin edit and delete the projects that they see fit

---

## 🔐 Roles

| Rol     | Permisions            |
| ------- | --------------------- |
| Admin   | Total access        |
| Usuario | CLook and create projects |

---


## 📚 Documentación

* JSON Server
* Vite
* Tailwind CSS

---

## 👨‍💻 Author

**Valery Avila Ortega**


---
