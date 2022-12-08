const Todo = require("../model/Todo")


const sreachController = async (req, res) => {
  try {
    //get the word to serach
    const { query } = req.body;
    
    const s = await Todo.aggregate().search({
      index: "default",
      text: {
        query: query,
        path: ["title", "tasks"],
      },
    });
    res.status(200).json(s);
  } catch (error) {
    res.status(503).json({
      status: 503,
      error: error,
    });
  }
};

module.exports = sreachController ;