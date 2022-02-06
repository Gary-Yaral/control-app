let http = require('http');
let app = require('express')(http)
let cors = require('cors');

app.use(
  cors({
    origin: ['http://localhost:3000']
  })
)

app.post('/save-user', (req, res) => {
  console.log(req.body)
  res.json({a: req.body})
})

app.listen(4000, () => {
  console.log('Server running on port ' + 4000);
})