const logger = require('../logger');

const apiStatus = (req,res,code=400)=>{
    // const { headers, httpVersion, method, url } = req;
    // req.logger.info({code: 200, test:'testing'});
    res.satus(code).json();
}