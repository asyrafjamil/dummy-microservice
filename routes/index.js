const {nanoid} = require('nanoid');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Server is running.');
});

router.post('/message', (req, res)=> {
  // Get the bearer token from request header.
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(404).send({
      'error': {
        'message': 'Token is not found!',
      },
    });
  }

  // Compare the token from header with the token from environment variable.
  const token = bearerToken.substring(7, bearerToken.length);
  if (process.env.CHANNEL_TOKEN !== token) {
    return res.status(401).send({
      'error': {
        'message': 'Unauthorized token!',
      },
    });
  }

  /**
   * User should retrieve the message from the req.body,
   * transform the message and send it out,
   * return the mId (ID of sent message).
   */

  res.status(200).send({
    mId: nanoid(),
  });
});

module.exports = router;
