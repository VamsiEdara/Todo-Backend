const Todo = require("../models/Todo");
exports.getAllTodos = async (req, res) => {
  try {
    // Fetch all todos from the database
    // using the Todo model's find method

    const todos = await Todo.find({});

    // Check if todos were found
    // If no todos are found, send a 404 response
    if (!todos) {
      return res.status(404).json({
        success: false,
        message: "No todos found",
      });
    }
    // Send a JSON response with the fetched todos
    res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// In Mongoose, .find({}) is used to retrieve all documents from a collection. The find() method searches a MongoDB collection and returns all documents that match a specified query. When an empty object {} is passed as the query, it signifies that there are no specific criteria for filtering the results. Therefore, the method returns all documents within the collection.
// The .find({}) method is called on the model, and a promise is returned. If the query is successful, the then block is executed, and the documents parameter contains an array of all documents in the collection. If an error occurs during the query, the catch block is executed, and the err parameter contains the error object.
