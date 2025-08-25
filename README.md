# 📚 Library Management API

A **Library Management System API** built with **Express.js**, **TypeScript**, and **MongoDB**.  
This API provides endpoints to manage **Books** and **Borrowing operations** with business logic, validations, and data aggregation.

---

## 🚀 Features

- 📖 **Books Management**
  - Add, update, delete, and fetch books
  - Auto-handle availability (based on stock count)

- 📦 **Borrow System**
  - Borrow books with due dates
  - Decrease book stock automatically
  - Mark books as unavailable when out of stock

- 📊 **Analytics**
  - Borrowed books summary using MongoDB Aggregation
  - Tracks total borrowed quantity per book

- ✅ **Extras**
  - Built with **TypeScript**
  - Proper error handling
  - Mongoose middleware & statics
  - Clean modular architecture

---

## 🛠️ Tech Stack

- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Runtime**: Node.js

---

## 📂 Project Structure

```bash
src/
│── modules/
│   ├── books/
│   │   ├── book.model.ts
│   │   ├── book.controller.ts
│   │   └── book.routes.ts
│   ├── borrow/
│   │   ├── borrow.model.ts
│   │   ├── borrow.controller.ts
│   │   └── borrow.routes.ts
│── app.ts
│── server.ts
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/library-api.git
cd library-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library
```

### 4️⃣ Run the Project
```bash
# Development
npm run dev

# Production
npm run build
npm start
```

---

## 📌 API Endpoints

### 📖 Books

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | `/api/books`      | Get all books     |
| GET    | `/api/books/:id`  | Get book by ID    |
| POST   | `/api/books`      | Add a new book    |
| PUT    | `/api/books/:id`  | Update a book     |
| DELETE | `/api/books/:id`  | Delete a book     |

---

### 📦 Borrow

| Method | Endpoint              | Description                   |
|--------|-----------------------|-------------------------------|
| POST   | `/api/borrow`         | Borrow a book                 |
| GET    | `/api/borrow/summary` | Get borrowed books summary    |

✅ **Borrowed Books Summary Example Response:**
```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": { "title": "The Theory of Everything", "isbn": "9780553380163" },
      "totalQuantity": 5
    },
    {
      "book": { "title": "1984", "isbn": "9780451524935" },
      "totalQuantity": 3
    }
  ]
}
```

---

## 🤝 Contribution

Contributions are welcome!  

1. Fork the repo  
2. Create a new branch (`feature/your-feature`)  
3. Commit your changes  
4. Push to your fork  
5. Open a Pull Request 🚀  

---

## 📜 License

This project is licensed under the **MIT License**.