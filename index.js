let express = require('express')
let cors = require('cors')
let app = express()
let port = 3000

app.use(cors())

let x = require('./test.json')

app.get('/x', (req, res) => {
	console.log("req x")
	res.send({ x: x.x })
}
)
app.get('/y', (req, res) => {
	console.log("req y")
	res.send({ y: x.y })
}
)
app.get('/z', (req, res) => {
	console.log("req z")
	res.send({ z: x.z })
}
)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
}
)

