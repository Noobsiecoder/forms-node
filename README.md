# 👨‍💻 Forms Authentication and Cloud Storage

A Full stack implementation of a simple form.

## 📜 Table of Contents

- [Tech Stack](#🔨-Tech-Stack)
- [Installation](#🚀-Setup)
- [Content](#📑-Content)
- [Screenshot](#💻-Screenshot)
- [Tasks](#📝-Tasks)
- [Resource](#📕-Resource)

## 🔨 Tech Stack

- FrontEnd -
  - **HTML5**
  - **TailwindCSS framework**
- BackEnd -
  - **Node.js**
  - **Express.js** (Framework)
  - **Embedded JavaScript Templates** (EJS)
  - **Firebase with Realtime database** (Database)

## 🚀 Setup

To clone this project :

```bash
git clone "https://github.com/Noobsiecoder/forms-node.git"
```

After cloning, run the following command :

```bash
cd form-node
export PORT=8080
npm install
npm start
```

## 📑 Content

- This application implements email authentication using **node.js** (_Express.js_ as framework) along with **firebase** _realtime database_.
- The _EJS_ files are rendered by in the backend and served as static _HTML_ files.
- The application uses **express-session** since we implement headless _HTTP Requests_ (no parameteers are passed during runtime in client side).

# 💻 Screenshot

- **Create Account**
  ![create-account](https://raw.githubusercontent.com/Noobsiecoder/forms-tailwind/main/src/assets/image/create_account.png)
  <br>
- **Sign In**
  ![sign-in](https://raw.githubusercontent.com/Noobsiecoder/forms-tailwind/main/src/assets/image/log_in.png)
  <br>
- **Dashboard**
  ![dashboard](https://raw.githubusercontent.com/Noobsiecoder/forms-tailwind/main/src/assets/image/dashboard.png)

# 📝 Tasks

- [x] **EJS** Components
- [x] Setup **Node**, **Express**, **EJS**
- [x] Setup **Firebase** in **Node.js**
- [x] _Creating new account_ using **Firebase** and storing data
- [x] Handling _sessions_
- [x] _Login/ Logout_ system using **Firebase**
- [ ] Adding _profile picture_ for users.
- [ ] _Google OAuth_ using **Firebase**
- [ ] Enabling _Remember me_ local storage
- [ ] Encrypt _Email-ID_ and _Password_
- [ ] **Refactor code** and check for _bugs_
- [ ] Deploy app

# 📕 Resource

- FrontEnd -
  - [HTML5 tutorial on W3Schools](https://www.w3schools.com/html/)
  - [TailwindCSS Official Docs](https://tailwindcss.com/)
- BackEnd -
  - [Node.js Official Docs](https://nodejs.dev/learn)
  - [Express.js Official Docs](https://expressjs.com/)
  - [Embedded JavaScript Templates](https://ejs.co/)
  - [Firebase Official Website](https://firebase.google.com/)
