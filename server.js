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
var apiRouter = express.Router();

//user morgan to show requests
app.use(morgan('dev'));
//use body-parser so we can grab info from params.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//database connection
mongoose.connect('mongodb://localhost:27017/bcrypt');
var User = require('./models/user.js');
//=====================================

//ROUTES CONFIGURATION
//=====================================
app.get('/', function(request,response) {
  response.send('Welcome to the Home Page');
});


//API ROUTES
//==================
apiRouter.route('/').get(function(request,response){
    response.json({message: "Welcome to the API homepage"});
  });
apiRouter.route('/users')
  .get(function(request,response) {
    //grab all users from the mongo db
    User.find(function(err, users){
      //check for error and send the messgae
      if(err) return response.status(401).send({message: err.message})
      //return all users as json format
      response.json(users);
    });
  });


//=====================================

//REGISTER ROUTES
//==================
app.use('/api', apiRouter);

//==================

//SERVER PORT
//=====================================
app.listen(3000);
//=====================================
