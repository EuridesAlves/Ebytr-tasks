const tasksPost = require('../../models/taskes/tasksPost');
// const { quantityValidate } = require('../../middlewares/products/index');
// const errorReturn = require('../../middlewares/errorReturn');

module.exports = async (task) => {
  const newTask = { Date: new Date(), ...task };
  const taskCreated = await tasksPost(newTask);
   
  return taskCreated;
};