const express = require('express');

const routers = express.Router({ mergeParams: true });

const tasksPost = require('../controllers/tasks/tasksPost');
const tasksGet = require('../controllers/tasks/tasksGet');
const tasksGetById = require('../controllers/tasks/tasksGetById');
const tasksPut = require('../controllers/tasks/tasksPut');
// const tasksDelete = require('../controllers/tasks/tasksDelete');

routers.post('/task', tasksPost);
routers.get('/task', tasksGet);
routers.get('/task/:id', tasksGetById);
routers.put('/task/:id', tasksPut);
// routers.delete('/task/:id', tasksDelete);

module.exports = routers;