const Todo = require("../models/Todo");
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: id });
    if (todo) {
      return res.status(200).json({
        success: true,
        message: "Todo item deleted successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Todo item not found",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
