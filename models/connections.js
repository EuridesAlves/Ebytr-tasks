const { MongoClient } = require('mongodb');

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Ebytr_tasks`;
const DB_NAME = process.env.DB;
// const DB_NAME = 'Ebytr_tasks';
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
let db = null;
const connection = async () => {
  try {
    db = db || (
      db = (await MongoClient.connect(MONGO_DB_URL, OPTIONS)).db(DB_NAME)
    );
    return db;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = { connection };
