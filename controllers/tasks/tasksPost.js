const { StatusCodes } = require('http-status-codes');
const tasksPost = require('../../services/tasks/tasksPost');

module.exports = async (req, res, next) => {
  try {
    const taskCreated = await tasksPost(req.body);
    return res.status(StatusCodes.CREATED).json({ ...taskCreated });
  } catch (err) {
    next(err);
  }
};