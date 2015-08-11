//BASE SET UP
//=====================================
//Call our packages
var express     = require('express');//Importing the express package methods
var path        = require('path');//This is used with morgan
var morgan      = require('morgan');//used to see requests in console
var bodyParser  = require('body-parser');//allows us to import from params.body
var mongoose    = require('mongoose');//creates a schema in mongo
var bcrypt      = require('bcrypt');//encrypts your passwords
//=====================================


//APP CONFIGURATION
//=====================================

var app = express();

//user morgan to show requests
app.use(morgan('dev'));
//use body-parser so we can grab info from params.body
app.use(body-parser.json());
app.use(body-parser.urlencoded({extended: false}));

//database connection
mongoose.connect('mongodb://localhost:2701/bcrypt');
//=====================================
