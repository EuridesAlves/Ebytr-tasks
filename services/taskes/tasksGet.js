const tasksGetAll = require('../../models/taskes/tasksGet');

module.exports = async () => {
  const tasks = await tasksGetAll();
  return tasks;
}; 