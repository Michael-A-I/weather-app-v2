const express = require('express');
const app = express();
const expressLayouts = require("express-ejs-layouts");
// import controller/routing into application - 1
const indexRouter = require('./routes/index')


// view engine
app.set('view engine','ejs')
// where views will go
app.set('views',__dirname + '/views')
// DNRY views
app.set('layout','layouts/layout');

// use express layouts
app.use(expressLayouts)
// where are public files i.e javascript css etc. 
app.use(express.static("public"))

// use routing - 1
app.use('/', indexRouter)



//server starts on 3000
app.listen(process.env.PORT||3000)