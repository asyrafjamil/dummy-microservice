/**
 * Single action controller method
 *
 * @route POST /message-id
 * @description Return the mID.
 * @access public
 *
 * @param {*} req Request object
 * @param {*} res Response object
 */

const {nanoid} = require('nanoid');

module.exports = (req, res) => {
  try {
    const mId = nanoid();

    res.status(200).send({
      status: 'success',
      mId,
    });
  } catch {
    return res.status(422).send({
      message: 'Body is missing.',
    });
  }
};
