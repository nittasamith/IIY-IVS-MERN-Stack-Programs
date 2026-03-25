const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Home page");
});

app.get('/about', function(req, res) {
    res.send("About page");
});

app.post('/contact', (req, res) => {
    res.send("Contact page");
});

app.delete('/student:id', function(req, res) {
    res.send("Student ID: " + req.query.id);
});

app.get('/search', function(req, res) {
    const course = req.query.course;
    res.send("Course Name: " + course);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});