let express = require('express')
let cors = require('cors')
let app = express()
let port = 3000

app.use(cors())

let shops = require('./shop.json')

app.get('/all', (req, res) => {

	console.log("Requested all shops")
	res.send({ shops: shops })
}
)
app.get('/:id', (req, res) => {

	let id = req.params.id
	if (isNaN(id)) {
		res.status(400).send({ error: "Id must be a number" })
		return
	}
	if (id < 0 || id >= shops.length) {
		res.status(404).send({ error: "No shop with id " + id + ", only " + (shops.length - 1) + " shops" })
		return
	}

	id = parseInt(id)

	console.log("Requested shop with id " + id)
	let shop = shops[id];
	res.send(shop)
}
)
app.get('/:id/products', (req, res) => {

	let id = req.params.id
	if (isNaN(id)) {
		res.status(400).send({ error: "Id must be a number" })
		return
	}
	if (id < 0 || id >= shops.length) {
		res.status(404).send({ error: "No shop with id " + id })
		return
	}

	id = parseInt(id)
	let products = shops[id].products
	console.log("Requested products of shop with id " + id)
	res.send(products)
}
)

app.listen(port, () => {
	console.log(shops);
	console.log(`Example app listening at http://localhost:${port}`)
}
)

