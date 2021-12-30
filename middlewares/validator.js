const {validationResult} = require('express-validator');

const validateRequestBody = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = {}; errors.array().map((err) => error[err.param] = err.msg);
    return res.status(422).json({error});
  }

  next();
};


const validateToken = (req, res, next) =>{
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(404).send({
      status: 'bearer_token_not_found',
      message: 'Bearer token is not found.',
    });
  }
  const token = bearerToken.substring(7, bearerToken.length);

  if (process.env.CHANNEL_TOKEN !== token) {
    return res.status(401).send({
      status: 'unathorized_user',
      message: 'User is unathorized.',
    });
  }
  next();
};

module.exports ={
  validateToken,
  validateRequestBody,
};

