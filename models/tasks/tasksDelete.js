const { ObjectId } = require('mongodb');
const { connection } = require('../connections');

module.exports = async ({ id }) => {
  if (!ObjectId.isValid(id)) return null;
  
  const database = await connection();
  const taskDeleted = await database.collection('tasks')
  .deleteOne({ _id: id });
  return taskDeleted;
};
