const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_devlopment');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection err : '));

db.once('open', () => {
    console.log('successfully connected to the database');
});
