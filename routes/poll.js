const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const mongoose = require('mongoose');
const Vote = require('../models/Vote');

var pusher = new Pusher({
    appId: '656664',
    key: 'abc1dc4967f29e73c2d4',
    secret: 'de73a30836b6167a4127',
    cluster: 'eu',
    encrypted: true
  });

router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({success: true, votes: votes}));
});

router.post('/', (req, res) => {
    const newVote = {
        os: req.body.os,
        points: 1
    }

    new Vote(newVote).save().then(vote => {
        pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os: vote.os
          });
    
          return res.json({success: true, message: 'Thank you for voting'})
    });
});

module.exports = router;