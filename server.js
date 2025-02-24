const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

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
    //User: { type: String, required: true }, // maybe not needed?
    Name: { type: String, required: true },
    sName: { type: String, required: true },
    residence: { type: String, required: true },
    Concerns: { type: Number, required: true }, // maybe not required?
});


const careReport = mongoose.model("Care_Report", crSchema);

// result route template for db info
app.get("/results", async (req, res) => {
    try {
        // get care reports from db
        res.json(await careReport.find({}));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`server.js listening on port ${port}`)
})