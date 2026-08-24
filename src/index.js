const express = require("express");
const app = express();

const PORT = 3000;
const Hostname = "Localhost";


//Health check 
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
    });
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World"
    });
});


const server = app.listen(PORT, Hostname, () => {
    console.log(`Server is running on http://${Hostname}:${PORT}`);
});