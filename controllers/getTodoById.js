const Todo = require("../models/Todo");
exports.getTodoById = async (req, res) => {
  try {
    // extract the todo item using id from the request parameters
    const { id } = req.params;
    // check if the todo item exists in the database
    const todo = await Todo.findById({ _id: id });
    //   const todo = await Todo.findById(id);
    // if the todo item id is not found, send a 404 response
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo item not found",
      });
    }
    // return the todo item as response
    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
