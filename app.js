const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const Encoder = require('node-html-encoder').Encoder;
const encoder = new Encoder('entity');

const app = express();

let todolist = [];

/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    res.render('todo.ejs', { todolist, clickHandler:"func1();" });
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {		
        todolist.push(encoder.htmlEncode(req.body.newtodo));//XSS vulnerability
    }
    res.redirect('/todo');
})
/* Edit an item in the to do list */
.post('/todo/edit/:id', urlencodedParser, function(req, res) {
    if (req.params.id != '' && req.body.edittodo !='') {
        todolist[req.params.id] = encoder.htmlEncode(req.body.edittodo);
    }
    res.redirect('/todo');
})

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {
        todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);

/*Missing functionality*/
