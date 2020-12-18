const { Router } = require('express');
const ScoreLine = require('../models/ScoreLine');
const router = Router();

router.get('/score', (req, res) => {
  // TODO: Добавить возможность загружать постранично
  ScoreLine.find({}).then(scoreLines => {
    res.end(JSON.stringify(scoreLines));
  }).catch(err => {
    throw err;
  })
});

router.post('/score', async (req, res) => {
  if (+req.body.score >= 0) {
    const scoreLine = new ScoreLine({
      playerName: req.body.playerName,
      score: +req.body.score
    })
  
    scoreLine.save().then(() => res.end())
    .catch(err => {
      throw err;
    })
  } else {
    throw 'счет не может быть меньше нуля';
  }
});

module.exports = router;