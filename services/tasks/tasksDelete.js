const tasksDelete = require('../../models/tasks/tasksDelete');

module.exports = async ({ id }) => {
  const taskDeleted = await tasksDelete({ id });
  return taskDeleted;
}; 