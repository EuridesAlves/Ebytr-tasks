const { connection } = require('../connections');

module.exports = async (newTask) => {
  const database = await connection();
  const taskInsertedId = await database.collection('tasks').insertOne({ ...newTask });
  return { _id: taskInsertedId.insertedId, ...newTask };
};