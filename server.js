const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('*', (req, res) => {
  res.send('Welcome to Kigmoon TestBank')
})

app.post('*', (req,res) =>{

 let {sessionId, serviceCode, phoneNum, text} = req.body;

if(text == ''){
	let response = `CON What would you like to check?
	1. Get My Account
	2. Get My Balance
    3. Send HeyGlory`
	
	res.send(response)
	}
	else if(text ==1){
	let accNum = '0023391289'
	let response = `Your Account number is ${accNum}`
	
	res.send(response)
	}
	
	else if(text ==2){
	let Balance = 5000000.00
	let response = `Your Account Balance is ${Balance}`
	
	res.send(response)
	}else{
		res.status(400).send('Bad Request')
	}
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})