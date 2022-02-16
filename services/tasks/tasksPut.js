const tasksPut = require('../../models/tasks/tasksPut');

module.exports = async (id, taskChange) => {
  // if (!ObjectId.isValid(id)) return null;
  const taskChanged = await tasksPut(id, taskChange);
  return taskChanged;
}; 