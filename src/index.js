const express = require("express");
const app = express();

const PORT = 3000;
const Hostname = "Localhost";

//Express middleware to parse JSON request bodies
app.use(express.json());

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

app.use("/todos", todosRoutes);


app.listen(PORT, Hostname, () => {
    console.log(`Server is running on http://${Hostname}:${PORT}`);
});