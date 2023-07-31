const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// POST /movies/:id/reviews (create review for a movie)
router.post('/comments/:id/comments', commentsCtrl.create);

module.exports = router;