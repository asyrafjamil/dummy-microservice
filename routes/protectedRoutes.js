const sendMessageController = require('../controllers/sendMessageController');
const validator = require('../middlewares/validator');
const {check} = require('express-validator');

module.exports = (_, express) => {
  const router = new express.Router({strict: true});
  const channelId = process.env.CHANNEL_ID;
    console.log('haha')
  router.post('/message-id', [
    check('message').isArray().withMessage('Message must be an array.'),
    check('channelId').not().isEmpty().withMessage('Your channelId is required.').equals(channelId),
    check('contactId').not().isEmpty().withMessage('Your contactId is required.'),
  ], validator.validateToken, validator.validateRequestBody, sendMessageController);

  return router;
};

