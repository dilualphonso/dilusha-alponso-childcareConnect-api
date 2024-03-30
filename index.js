const express = require('express');
const cors = require('cors');
require('dotenv').config();
const daycareRoute = require('./routes/daycare-route');
const userRoute = require('./routes/user-route');


const app = express();
const port = process.env.port || process.argv[2] || 8080;
const { CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  next();
})

// basic home route
app.get('/', (_req, res) => {
  res.send('Welcome to dev dynamos instock!');
});

//warehouse list base route
app.use('/api', daycareRoute);
//inventory list route
app.use('/api/users', userRoute);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})