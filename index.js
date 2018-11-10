const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send({hi: 'there'});
});
app.get('/greeting', (req, res) => {
    res.send({hi: 'welcome'});
});

app.listen(5000, () => {
    console.log('Listen port 5000 successfully');
});