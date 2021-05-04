const Todo = require('../models/todo');

module.exports.create = (req, res) => {
    Todo.create({
        name: req.body.name
    }, (err, newTodo) => {
        if (err) {
            console.log('error in creating the contact');
            return;
        }

        console.log('*********', newTodo);
        return res.redirect('back');
    });
};