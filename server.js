const express = require('express')
const ve = require('vite-express')
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const jwksRsa = require('jwks-rsa')
const cors = require('cors')
const path = require('path')
const app = express()
const ViteExpress = ve;
const port = 3000

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // change this link once glitch is set up
    methods: 'GET,POST', // allow GET and POST requests
    credentials: true
}))
app.use(express.json())


// Connect to MongoDB
const uri = "mongodb+srv://amperez:7JdGu1qbL8P4ETog@cluster0.hwt1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB "))
    .catch(err => console.error(err));

// Care Report schema
const crSchema = new mongoose.Schema({
    rName: { type: String, required: false }, // not required for anonymous reports
    sName: { type: String, required: true },
    residence: { type: String, required: true },
    concerns: { type: String, required: true },
});

const careReport = mongoose.model("Care_Report", crSchema);

// JSON Web Key Sets (jwks) for Auth0 Public/Private Key signing
const auth0Domain = 'https://dev-xf1gnvayvu76e2me.us.auth0.com'
const client = jwksRsa({
    jwksUri: `${auth0Domain}/.well-known/jwks.json`,
})

const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
        if (err) {
            callback(err)
        }
        const signingKey = key.publicKey || key.rsaPublicKey
        callback(null, signingKey)
    })
}

// Middleware: validate JSON Web Token (jwt)
const checkJwt = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

    if (!token) {
        return res.status(401).send('Unauthorized')
    }

    jwt.verify(token, getKey, { audience: 'final-api', issuer: auth0Domain }, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized')
        }
        req.user = decoded
        next()
    })
}

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to the public page!')
})

// Admin route using Auth0 admin role
app.get('/admin', checkJwt, (req, res) => {
    if (!req.user || !req.user.roles.includes('admin')) {
        return res.status(403).send('Forbidden')
    }
    res.send('Welcome Admin!')
})

// result route template for db info
app.get("/results", async (req, res) => {
    try {
        // get care reports from db
        res.json(await careReport.find({}));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// route to submit care report
app.post("/submit-care-report", async (req, res) => {
    try {
        // get fields from request body
        const { rName, sName, residence, concerns } = req.body;

        // validate fields (assuming all but reporter name are required)
        if (!sName || !residence || !concerns) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // create a new care report document
        const newReport = new careReport({ rName, sName, residence, concerns });
        await newReport.save(); // saving to Mongo

        console.log("New Care Report Saved:", newReport); // debug
        res.status(201).json({ message: "Care report submitted successfully!" });

    } catch (error) {
        console.error("Error saving care report:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.use(express.static(path.join(__dirname, "client", "dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})


// ----- Affirmations ----------
// Store affirmations in server
let affirmations = []
let affirmationID = 1

app.get("/affirmations", (req, res) => {
    res.json(affirmations)
})

// Post an affirmation (each affirmation is a sticky note color and text)
app.post("/affirmations", (req, res) => {
    const { text, color } = req.body;
    if (!text || !color) {
        return res.status(400).json({ error: "Text and color are required." })
    }

    const newAffirmation = { id: affirmationID++, text, color }
    affirmations.push(newAffirmation);
    res.status(201).json(newAffirmation)
})


//
// app.listen(port, () => {
//     console.log(`server.js listening on port ${port}`)
// })
ViteExpress.listen(app, port, () => {
    console.log(`Listening on port ${port}` )
})