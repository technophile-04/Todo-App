const express = require('express');
const port = 3000;
const app = express();


app.listen(port, (err) => {
    if (err) {
        console.log('Error in runnig the server');
        return;
    }

    console.log('Server is up and runnig on port : ', port);
})