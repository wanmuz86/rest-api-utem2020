var express = require('express');
// I import express module
var app = express();
// I create a server express assigned it to app 
var bodyParser = require('body-parser');

// I import body parser module

// Middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
http://www.makan minum.com ==> makan%20minum.com
// I use bodyParser (configuration to configure that my API will encode the URL)
// I accept json in the body

var port = process.env.port || 8080
// Routing

var router  = express.Router()
router.get('/', (req,res)=>{
	res.json({message:'Hula! my API works!!!'})
})


router.get('/hello', (req,res)=>{
	res.json({message:'Hello World!'});
})

router.get('/goodbye/:name', (req,res)=>{
	res.json({message:'Goodbye '+req.params.name})
})

router.post('/sum', (req,res)=>{
	var sum = req.body.num1 + req.body.num2
	res.json({message:"The sum is "+sum});
})
app.use('/api',router);

app.listen(port);

console.log("Magic happened at port "+port);