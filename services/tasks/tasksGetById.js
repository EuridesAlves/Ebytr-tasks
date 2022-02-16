const taskesGetId = require('../../models/tasks/tasksGetById');

module.exports = async (id) => {
  // if (!ObjectId.isValid(id)) return null;
  const taskes = await taskesGetId(id);
  return taskes;
}; 