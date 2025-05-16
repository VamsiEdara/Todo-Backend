const Todo = require("../models/Todo");
exports.updateTodo = async (req, res) => {
  try {
    // extract the todo item using id from the request parameters
    const { id } = req.params;
    const { title, description, completed } = req.body;
    // if (!title || !description || completed === undefined) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Please provide all fields",
    //   });
    // }
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, completed, updatedAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      message: "Todo item updated successfully",
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
