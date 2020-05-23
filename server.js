//////////////////////////////////
// Dependencies
//////////////////////////////////
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
const Characters = require(`./models/characters.js`)
const controller = require('./controllers/m-router.js')
//////////////////////////////////
// Database
//////////////////////////////////
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';

//////////////////////////////////
// Mongoose
//////////////////////////////////
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open' , ()=>{});

//////////////////////////////////
// Middleware
//////////////////////////////////
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride(`_method`));


//////////////////////////////////
// Routes
//////////////////////////////////
app.use(`/characters`, controller)

//////////////////////////////////
// Default / Redirect
//////////////////////////////////
app.get('/' , (req, res) => {
  res.send('Hello World!!');
});

//////////////////////////////////
// Port Listener
//////////////////////////////////
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

