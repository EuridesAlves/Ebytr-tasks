const { StatusCodes } = require('http-status-codes');

const tasksGetAll = require('../../services/taskes/tasksGet');

module.exports = async (req, res, next) => {
    try {
      const tasks = await tasksGetAll();
      return res.status(StatusCodes.OK).send(tasks);
    } catch (err) {
      next(err);
    }
};