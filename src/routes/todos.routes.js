//import the express module
const express = require("express");

//import the todos data
const todos = require("../data/todos");

//A built in methods in Express that creates a new isolated instance of middlewarew and routes.
const router = express.Router();

//GET /todos Return all todos
router.get("/", (req, res) => {
    res.status(200).json(todos);
});

module.exports = router;