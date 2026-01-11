🖥️ Electron Desktop App

A lightweight desktop application built using Electron.
This project demonstrates how to create, run, and package a standalone Electron app using HTML, CSS, and JavaScript.

✨ Features

Desktop application using Electron

Lightweight and fast

Frameless window support

Freely movable app window

Runs independently of VS Code

Can be packaged into a native executable

🛠️ Tech Stack

Electron

Node.js

HTML

CSS

JavaScript

electron-builder

📂 Project Structure
electron-app-template/
├── src/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── main.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md


node_modules/ and dist/ are generated automatically and are excluded using .gitignore.

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/CereenaG/desktop-calendar-app.git
cd electron-app-template

2️⃣ Install dependencies
npm install

▶️ Run the App (Development Mode)
npm start


This will launch the Electron application in development mode.

📦 Build the Desktop Application
npm run build


After building, the executable/installer will be generated inside the dist/ directory.

🧠 How the App Works

main.js
Handles the Electron main process and creates the application window.

src/index.html
Defines the UI structure of the application.

src/style.css
Handles styling and window drag behavior for the frameless window.

src/script.js
Contains the frontend logic and interactions.



GitHub: https://github.com/CereenaG
