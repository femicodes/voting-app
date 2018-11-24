const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '656664',
    key: 'abc1dc4967f29e73c2d4',
    secret: 'de73a30836b6167a4127',
    cluster: 'eu',
    encrypted: true
  });

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('my-channel', 'my-event', {
        "message": "hello world"
      });
});

module.exports = router;