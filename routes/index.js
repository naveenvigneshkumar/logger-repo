const express = require('express');
const router = express.Router();
// const logger = require('../logger');
const middleware = require('../middleware');

router.get('/',
 middleware.initlogger,
(req,res,next)=>{
    // const {logger} = req;
    // const { headers, httpVersion, method, url } = req;
    req.logger.info({code: 200, test:'testing'});
    res.status(200).json({test:'testing'});
});

module.exports = router;