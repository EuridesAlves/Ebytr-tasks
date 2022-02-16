const { StatusCodes } = require('http-status-codes');
const tasksPut = require('../../services/tasks/tasksPut');

module.exports = async (req, res, next) => {
  try {
     const { id } = req.params;
     const taskChange = req.body;
     const taskChanged = await tasksPut(id, taskChange);
      if (!taskChanged) { 
        return res.status(StatusCodes.NOT_FOUND).send({ message: 'Task not found' });
      }
      return res.status(StatusCodes.OK).send(taskChanged);
    } catch (err) {
    next(err);
  }
};