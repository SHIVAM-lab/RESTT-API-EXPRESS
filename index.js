const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const logger = require('./Middleware/logger');
const router = require('./routes/api/api');
const app = express();

app.use(logger);

app.use({urlencoded:true});
app.use(bodyParser({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/',require('routes/api/api'));

const port = process.env.PORT||3000;

app.listen(port,()=>console.log(`server is running on port ${port}`));


