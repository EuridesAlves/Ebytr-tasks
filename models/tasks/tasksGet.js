const { connection } = require('../connections');

module.exports = async () => {
  const database = await connection();
  const tasks = await database.collection('tasks')
  .find().toArray();
  
  return tasks;
};