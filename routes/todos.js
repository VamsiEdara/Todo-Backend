const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo.js");
const { getAllTodos } = require("../controllers/getAllTodos.js");
const { getTodoById } = require("../controllers/getTodoById.js");
const { updateTodo } = require("../controllers/updateTodo.js");
const { deleteTodo } = require("../controllers/deleteTodo.js");

//create a new todo
router.post("/createTodo", createTodo);

// get all todos
router.get("/getAllTodos", getAllTodos);
// get a todo by id
router.get("/getTodo/:id", getTodoById);

// update a todo by id
router.put("/updateTodo/:id", updateTodo);

// delete a todo by id
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
