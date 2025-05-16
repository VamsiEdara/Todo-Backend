const Todo = require("../models/Todo.js");

//route handler
exports.createTodo = async (req, res) => {
  try {
    // extract info using destructuring from the request body
    const { title, description, completed } = req.body;
    // check if all fields are provided
    if (!title || !description || completed === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }
    // create a new todo object and save it to the database
    const todo = await Todo.create({
      title,
      description,
      completed,
    });
    // send a json response with the created todo object
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
