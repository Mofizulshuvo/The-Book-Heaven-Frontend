📚 The Book Heaven

A simple and user-friendly book management app where users can add, update, view, and delete their own books. The project includes authentication, protected routes, and a clean UI built with React and Tailwind.

([Live-Link](https://splendorous-marigold-bf0e36.netlify.app/))

🚀 Features
🔐 Authentication

Firebase login system

AuthContext for managing user state

Protected routes with React Router

📘 My Books Page

Fetches books added by the logged-in user

Responsive table layout with cover, title, author, genre, and rating

Update and Delete options

Delete confirmation using React-Toastify

Smooth loader while fetching data

🌍 Backend

Node.js + Express server

MongoDB database

Hosted on Render

Endpoints used:

GET /my-books/:email

DELETE /Book-data/:id

🧰 Tech Stack

Frontend: React, Tailwind CSS, React Router, Firebase, Toastify, React Helmet
Backend: Node.js, Express, MongoDB
Hosting: Netlify (frontend), Render (backend)

📂 Key Functionality Flow

User logs in → Auth stored in context

App fetches books using user email

Loader displays while fetching

Books appear in a responsive table

Delete uses confirmation toast

Update opens book edit page

📌 Future Improvements

Pagination

User profile

