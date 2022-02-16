const { StatusCodes } = require('http-status-codes');

const tasksGetId = require('../../services/tasks/tasksGetById');

module.exports = async (req, res, next) => {
  try {
      const { id } = req.params;
      const result = await tasksGetId(id);
  
      if (!result) return res.status(StatusCodes.NOT_FOUND).send({ message: 'Task not found' });
      return res.status(StatusCodes.OK).send(result);
    } catch (err) {
      next(err);
    }
};