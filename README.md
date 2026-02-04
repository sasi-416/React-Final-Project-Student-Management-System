# 🎓 React Final Project – Student Management System

A **full-stack web application** built using **React.js (Frontend)** and **Spring Boot (Backend)** that performs **CRUD operations on Student data**.  
The frontend communicates with the backend using **Axios** and **REST APIs**.

---

## 📌 Project Overview

This project demonstrates **end-to-end application development** with:

- ⚛️ React for UI & state management  
- 🌱 Spring Boot for RESTful APIs  
- 🧠 Redux for global state handling  
- 🔗 Axios for frontend–backend communication  
- 🗄️ MySQL / H2 (configurable) for data persistence  

---

## 🧩 Tech Stack

### 🔹 Frontend
- React.js  
- JavaScript (ES6+)  
- Redux Toolkit  
- Axios  
- HTML5, CSS3  
- Bootstrap  
- Node.js, npm  

### 🔹 Backend
- Java  
- Spring Boot  
- Spring Data JPA  
- RESTful APIs  
- Maven  
- MySQL / H2 Database  

---

## ✨ Features

### 🖥️ Frontend Features
- Add new students  
- View all students  
- Edit student details  
- Component-based UI  
- Redux state management  
- Clean page navigation  

### ⚙️ Backend Features
- REST APIs for Student CRUD operations  
- Layered architecture (Controller → Service → Repository)  
- JPA entity mapping  
- Database integration  
- CORS enabled for React access  

---

## 📂 Project Structure

### 📁 Root

React-Final-Project/

├── Front-End/

├── Back-End/

└── README.md

---

### 📁 Front-End (React)
Front-End/

├── public/

│   └── index.html

├── src/

│   ├── components/

│   │   ├── AddStudent.js

│   │   ├── EditStudent.js

│   │   ├── Header.js

│   │   └── StudentInfo.js

│   ├── pages/

│   │   ├── AddStudentPage.js

│   │   ├── EditStudentPage.js

│   │   └── AllStudentListPage.js

│   ├── redux/

│   │   ├── Store.js

│   │   └── StudentSlice.js

│   ├── css/

│   │   ├── App.css

│   │   └── Header.css

│   ├── App.js

│   └── index.js

├── package.json

└── package-lock.json

---

### 📁 Back-End (Spring Boot)

Back-End/

├── src/main/java/react_axios_demo/

│   ├── controller/

│   │   └── StudentController.java

│   ├── service/

│   │   └── StudentService.java

│   ├── repository/

│   │   └── StudentRepository.java

│   ├── entity/

│   │   └── Student.java

│   └── ReactAxiosDemoApplication.java

├── src/main/resources/

│   └── application.properties

├── pom.xml

├── mvnw

└── mvnw.cmd

---

## 🔄 Frontend–Backend Flow

1. React UI triggers actions (Add / Edit / View)  
2. Axios sends HTTP requests to Spring Boot APIs  
3. Controller receives requests  
4. Service applies business logic  
5. Repository interacts with the database  
6. JSON response returned to frontend  
7. Redux updates the UI state  

---

## 🌐 REST API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/students` | Get all students |
| POST | `/students` | Add a new student |
| PUT | `/students/{id}` | Update student |
| DELETE | `/students/{id}` | Delete student |

---

## 🚀 Getting Started

### ✅ Backend Setup (Spring Boot)

```bash
cd Back-End
mvn spring-boot:run
```
###  Backend runs at:
```bash
http://localhost:8080
```

---

### ✅ Frontend Setup (React)
```bash
cd Front-End
npm install
npm start
```
### Frontend runs at:
```bash
http://localhost:3000
```

---

## 🔗 Axios Example (Frontend)
```bash
axios.get("http://localhost:8080/students")
  .then(response => {
    setStudents(response.data);
  });
```

---

## 🛠 Future Enhancements

- 🔐 Authentication & Authorization (JWT)

- 🔍 Pagination & Search

- ✅ Form validation

- ☁️ Deployment (Netlify + Render)

- 👥 Role-based access control
