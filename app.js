require("babel-core/register");

var express = require('express');
var app = express();
var React = require('react');
var ReactDOM = require('react-dom/server')
var component = require('./public/component.jsx')

var HelloWorld = React.createFactory(component)


app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('index', {
    react: ReactDOM.renderToString(HelloWorld({name: "SERVER"}))
  })
})

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
