const tasksGetAll = require('../../models/tasks/tasksGet');

module.exports = async () => {
  const tasks = await tasksGetAll();
  return tasks;
}; 