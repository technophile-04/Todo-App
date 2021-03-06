const express = require('express');
const port = 3000;
const app = express();
const mainRouter = require('./routes');
const db = require('./config/mongoose');
const Todo = require('./models/todo');

app.use(express.static('./assets'));
app.use(express.urlencoded());

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', mainRouter);

app.listen(port, (err) => {
    if (err) {
        console.log('Error in runnig the server');
        return;
    }

    console.log('Server is up and runnig on port : ', port);
})