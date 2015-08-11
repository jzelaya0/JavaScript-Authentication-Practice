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
