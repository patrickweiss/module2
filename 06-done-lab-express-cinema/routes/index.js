const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie
    .find()
    .then(moviesFromDB => res.render('movies-pages/movies', { moviesFromDB }))
    .catch(err => res.status(500).send(err));
});

router.get('/movie/:movieId', (req, res) => {
  Movie
    .findById(req.params.movieId)
    .then(theMovie => {
      console.log(theMovie);
      res.render('movies-pages/movie', { theMovie } );
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
