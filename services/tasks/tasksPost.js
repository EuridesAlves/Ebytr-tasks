const tasksPost = require('../../models/tasks/tasksPost');

module.exports = async (task) => {
  const newTask = { Date: new Date(), ...task };
  const taskCreated = await tasksPost(newTask);
   
  return taskCreated;
};