const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');
const routes = require('./routes');

const dbURI = "mongodb+srv://user_2:pass1234@cluster0.gd84m03.mongodb.net/TatvaProject?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedtopology: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', 'Outlines');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });
  
app.get('/',(req, res)=>{
  res.redirect('/recipes');
});

app.get('/about',(req, res)=>{
    res.render('about');
});

app.use('/recipes', routes);
  
app.use((req, res) => {
    res.render('error');
});