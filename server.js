const express = require('express')
const mongoose = require("mongoose")
const session = require('express-session')
const cors = require('cors')
const app = express()
const port = 3000

// MongoDB connection
mongoose.connect("mongodb+srv://mnorton2:V2HScJ3DrPsgJUlH@cs4241.hohzt.mongodb.net/testDB?retryWrites=true&w=majority&appName=cs4241")
    .then(() => console.log(`MongoDB connected`))
    .catch(err => console.log("MongoDB connection error:", err))

// Middleware
app.use(cors())
app.use(express.json())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}))

// Public Route for all pages except admin
app.get('/', (req, res) => {
    res.send("No Login Required")
})


// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username === 'admin' && password === 'SecretAdmin!') {
        req.session.isAdmin = true;
        return res.json({ success: true, message: "Login successful", redirectTo: "/admin" })
    }

    // Redirect to login page if wrong credentials
    return res.status(401).json({ success: false, error: "Invalid credentials. Please try again." })
})


// Login Page
/*
app.get('/login', (req, res) => {
    const errorMessage = req.session.error || ''
    req.session.error = null

    res.send(`
        <h2>Login</h2>
        ${errorMessage ? `<p>${errorMessage}</p>` : ""}
        <form method="POST" action="/login">
            <label>Username: <input type="text" name="username"></label><br>
            <label>Password: <input type="password" name="password"></label><br>
            <button type="submit">Login</button>
        </form>
    `)
})
*/

// Redirect to login page if not authenticated
const requireAdmin = (req, res, next) => {
    if (!req.session.isAdmin) {
        return res.status(401).json({ success: false, error: "Unauthorized User. Please login first." })
    }
    next()
}


app.get('/admin', requireAdmin, (req, res) => {
    res.json({ message: "Welcome, Admin!" })
})


// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.json({ success: true, message: "Logged out successfully." })
    })
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
