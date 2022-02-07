let http = require('http');
let app = require('express')(http)
let cors = require('cors');
const bodyParser = require('body-parser');
const validate = require('./src/validations/newUser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(
  cors({
    origin: ['http://localhost:3000']
  })
)

app.post('/save-user', (req, res) => {
  if (Object.keys(validate(req.body)).length === 0) {
    res.send({
      response: true,
      status: 200
    })
  }

  if (Object.keys(validate(req.body)).length > 0) {
    res.send({
      response: false,
      status: 400
    })
  }
})

app.listen(4000, () => {
  console.log('Server running on port ' + 4000);
})