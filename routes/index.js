const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const createTodoController = require('../controllers/createTodo_controller');
const deleteTodoController = require('../controllers/deleteTodo_controller');

router.get('/', homeController.home);
router.post('/create-todo', createTodoController.create);
router.get('/delete-todo', deleteTodoController.delete);


module.exports = router;