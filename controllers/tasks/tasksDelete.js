const { StatusCodes } = require('http-status-codes');
const tasksDelete = require('../../services/tasks/tasksDelete');

module.exports = async (req, res, next) => {
    try {
      const { id } = req.params;
      const taskDeleted = await tasksDelete({ id }); 
      // console.log(taskDeleted);
      // console.log(taskDeleted.deletedCount !== 0);

      if (taskDeleted !== null && !taskDeleted.deletedcount === 0) {
          // console.log(taskDeleted.deletedcount !== 0);
           
          return res.status(StatusCodes.NO_CONTENT).json({ message: 'Deleted task!' });
      }
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Task not deleted!' });
    } catch (err) {
    next(err);
    }
};