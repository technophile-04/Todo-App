const Todo = require('../models/todo');

module.exports.home = (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            console.log('err in fetching from server');
            return;
        }

        return res.render('home', {
            title: 'Todo App',
            todo_list: todos
        })
    })
};