const {nanoid} = require('nanoid');
module.exports = (app, express) => {
  app.use('/', route(app, express));
};

const route = (_, express) => {
  const router = new express.Router({strict: true});

  router.use(validateToken);

  router.post('/message', (req, res)=> {
    const mId = nanoid();

    res.status(200).send({
      status: 'success',
      mId,
    });
  });

  return router;
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
