const router = require('express').Router();
const guestRoute = require('./guest-routes');
const commentRoute = require('./comment-routes');

//this will redirect to the guest route; url is localhost:3001/paradise/guests
router.use('/guests', guestRoute);

//redirect to the comments page; url is localhost:3001/paradise/comments
router.use('/comments', commentRoute);

//exports
module.exports = router;
