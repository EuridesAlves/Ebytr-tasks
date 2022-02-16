const taskesGetId = require('../../models/taskes/taskesGetById');

module.exports = async (id) => {
  // if (!ObjectId.isValid(id)) return null;
  const taskes = await taskesGetId(id);
  return taskes;
}; 