const { ObjectId } = require('mongodb');
const { connection } = require('../connections');

module.exports = async (id) => {
  const db = await connection();
  return db.collection('tasks').findOne(ObjectId(id));
}; 
