# KraSStaS_GREENKART-Cypress

[![Cypress](https://img.shields.io/badge/Cypress-13%2B-brightgreen?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-blue?logo=github&logoColor=white)](https://github.com/krasstas/KraSStaS_GREENKART-Cypress)
[![Status](https://img.shields.io/badge/Status-Completed-blue)](#)
[![License](https://img.shields.io/badge/License-MIT-informational)](#)

Automated UI testing project for the GreenKart demo application using Cypress.

---

### 📌 Project Description

This repository contains an automated test completed as part of a technical assignment  
for testing the web application:

👉 https://rahulshettyacademy.com/seleniumPractise/#/

The goal of the task was to:

- Filter products using a search input
- Add specific items (Carrot and Mushroom) to the cart
- Modify product quantities
- Remove one selected product from the cart
- Store selectors in a structured file (constants / locators)
- Follow Cypress best practices (clear test structure, assertions, reusable selectors)

---

## ✅ Tech Stack

- **JavaScript**
- **Cypress 13+**
- **Node.js**
- **Git / GitHub**
- **VS Code**

---

## 🖼️ Screenshot

<img alt="GreenKart Home" src="./assets/greenkart_home.png" width="900" />

## 🎬 Demo (GIF)

<img alt="Cypress Demo" src="./assets/demo.gif" width="900" />

## ✅ Project Structure

```plaintext
KraSStaS_GREENKART-Cypress/
│
├── cypress/
│   ├── e2e/
│   │   ├── greenkart_krasstas_Custom_spec.cy.js   # Main automated test
│   │   └── greenkart_krasstas_Record_spec.cy.js   # Studio auto-record test (not used)
│   │
│   ├── pageobjects/
│   │   └── selectors.cy.js                        # Centralized locators/constants
│   │
│   ├── fixtures/                                  # Default Cypress folder
│   ├── screenshots/                               # Auto screenshots (ignored)
│   └── videos/                                    # Auto videos (ignored)
│
├── .gitignore
├── README.md
├── cypress.config.js
├── package.json
└── package-lock.json
```

## ✅ Installation & Setup

# 1. Clone the repository

git clone https://github.com/krasstas/KraSStaS_GREENKART-Cypress.git

# 2. Navigate into the project folder

cd KraSStaS_GREENKART-Cypress

# 3. Install dependencies

npm install

## ✅ How to Run the Tests

🔹 Run in Interactive Mode (UI)
npx cypress open

🔹 Run in Headless Mode (terminal only)
npx cypress run

## ✅ Test Scenario Overview

The automated test performs the following actions:

1. Open the GreenKart application
2. Search products using keyword "ro"
3. Locate Carrot
4. Set quantity to 5
5. Add Carrot to cart
6. Locate Mushroom
7. Increase quantity by 2
8. Add Mushroom to cart
9. Open cart preview
10. Remove Carrot from the cart

✅ Author
Stanislav Krasilnikov (KraSStaS)
Automated QA Engineer

🔗 GitHub: https://github.com/krasstas
