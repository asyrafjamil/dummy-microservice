require('dotenv').config({path: '../.env'});
const axios = require('axios');
const options = {
  headers: {
    'Authorization': `Bearer ${process.env.CHANNEL_TOKEN}`,
  },
};

const body = {
  'channelId': '1',
  'contactId': '2',
  'events': [{
    // message payload
    'type': 'message',
    'mId': 'xcvzzxcxczxczxc',
    'timestamp': 2132131321000, // Milliseconds
    'message': {
      'type': 'text',
      'text': 'hello world',
    },
    // message receipts payload (how to handle failed)
    'type': 'message_status',
    'mId': 'jfoewaifjaoif',
    'timestamp': 2132131321000, // Milliseconds
    'status': {
      'value': 'delivered|read|failed',
      'message': 'Invalid token',
    },
  }],
  'contact': {
    'firstName': 'Leo',
    'lastName': 'Kiat',
    'profilePic': 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/08/14/image.jpg?width=990&auto=webp&quality=75&crop=982:726,smart',
    'locale': 'en_US',
    'countryCode': 'MY',
    'timezone': 8,
    'email': 'leo@rocketbots.io',
    'phone': '+60123456789',
    'language': 'en',
  },
};

(async () => {
  try {
    await axios.post(process.env.WEBHOOK_URL, body, options);
    console.log('ok');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
  }
  process.exit(0);
})();
