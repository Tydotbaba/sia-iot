// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

//this is the vairable to check the state of Power in the home
let state = false;

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	//res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
	if(state === true)	
		{
			res.render('user', {state: true})
		}
	res.render('user', {state: false})
})


/*  This route render the status of electricity in the user's home */
router.get('/user', (req, res) => {
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID
	})
})

/*  This route render json data */
router.get('/json', (req, res) => {
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
	res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', (req, res) => {
	res.redirect('https://www.turbo360.co/landing')
})


module.exports = router
