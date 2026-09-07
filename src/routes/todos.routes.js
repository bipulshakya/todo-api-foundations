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

//GET /todos/:id Return a single todo by id
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
         return res.status(404).json({
            error: "Todo not found"
         });
    }
    res.status(200).json(todo);
});

module.exports = router;