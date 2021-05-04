const Todo = require('../models/todo');

module.exports.delete = (req, res) => {
    let id = req.query.id;

    Todo.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log('error in deleting an object in database');
            return;
        }

        return res.redirect('back');
    })
}