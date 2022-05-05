const logger = require('../logger');

const initlogger = (req, res, next)=>{
    //const { headers, httpVersion, method, url } = req;
    req.logger = logger.child({ id:'1' });
    // req.logger.info({ headers, httpVersion, method, url });
    next();
};

module.exports= {initlogger};