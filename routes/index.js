const {nanoid} = require('nanoid');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Server is running.');
});

router.post('/message', (req, res)=> {
  try {
    // Get the brearer token from request header.
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(404).send({
        status: 'bearer_token_not_found',
        message: 'Bearer token is not found.',
      });
    }

    // Compare the token from header with the token from environment variable.
    const token = bearerToken.substring(7, bearerToken.length);
    if (process.env.CHANNEL_TOKEN !== token) {
      return res.status(401).send({
        status: 'unathorized_user',
        message: 'User is unathorized.',
      });
    }

    /**
     * User should retrieve the message from the req.body,
     * transform the message and send it out,
     * return the mId (ID of sent message) and success status on success call,
     * else return the error message and failed status.
     */

    res.status(200).send({
      status: 'success',
      mId: nanoid(),
    });
  } catch (err) {
    res.status(500).send({
      status: 'failed',
      message: 'Something is wrong.',
    });
  }
});

module.exports = router;
