const express = require('express')
const app = express();
const port = 3000; 
const checkRouter = require('./routes/index');


app.use('/',checkRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})