
const moment = require('moment');
const logger = (req,res,next)=>{
    console.log(`ankit`);
    console.log(`lklff`);
    console.log(`${req.protocol}://${req.get('host')}/${req.originalUrl}${moment().format()}`);
    next();
}


module.exports = logger;