const { ObjectId } = require('mongodb');
const { connection } = require('../connections');

module.exports = async (id, taskChange) => {
  const database = await connection();
  await database.collection('tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: { taskChange } },
  );

  return { _id: id, ...taskChange };
};