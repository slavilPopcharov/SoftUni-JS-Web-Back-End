const router = require('express').Router();
const {Movie} = require('../models/Movie')
router.get ('/', (req, res) => {
  res.render('home');
  });
router.get  ('/colections',async (req, res) => {
  const movies = await Movie.find().lean()
 
res.render('colections', {movies});
});

router.get ('/create', (req, res) => {
res.render('create');
});

router.post ('/create', async (req, res) => {
  let created = await Movie.create(req.body);
  res.redirect('/')
});



module.exports = router
