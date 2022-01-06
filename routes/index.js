/**
 * Inside this file, the route is placed between the Custom Channel and 3rd Party Chat application.
 * The process happens here.
 */

const {nanoid} = require('nanoid');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', function(req, res) {
  res.status(200).send('API is healthy.');
});

router.post('/message', (req, res)=> {
  // Get the bearer token from request header.
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401);
  }

  // Compare the token from header with the token from environment variable.
  const token = bearerToken.substring(7, bearerToken.length);
  if (process.env.CHANNEL_TOKEN !== token) {
    return res.status(401);
  }

  /**
   * User should retrieve the message from the req.body,
   * transform the message and send it out,
   * return the mId (ID of sent message).
   * Output example:
   * "mId": "_CX_faR8Ro_yTzhf4AtI3"
   */

  res.status(200).send({
    mId: nanoid(),
  });
});

module.exports = router;
