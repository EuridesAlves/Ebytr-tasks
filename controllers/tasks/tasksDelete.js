const { StatusCodes } = require('http-status-codes');
const tasksDelete = require('../../services/tasks/tasksDelete');

module.exports = async (req, res, next) => {
    try {
      const { id } = req.params;
      const taskDeleted = await tasksDelete({ id }); 
      
      if (taskDeleted !== null && taskDeleted.deletedCount === 1) {
        return res.status(StatusCodes.NO_CONTENT).json();
      }
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Task not deleted!' });
    } catch (err) {
    next(err);
    }
};