const todoList = [
    {
        name: 'buy books'
    },
    {
        name: 'buy toys'
    },
    {
        name: 'buy fruits'
    }
]

module.exports.home = (req, res) => {
    return res.render('home', {
        title: 'Todo App',
        todo_list: todoList
    });
};