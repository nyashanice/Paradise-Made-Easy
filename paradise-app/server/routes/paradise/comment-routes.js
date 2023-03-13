const router = require('express').Router();
const {
   getAllComments,
   getCommentByID,
   createComment,
   updateComment
} = require('../../controllers/comment-Controller');

//route to root of the page, localhost:3001/paradise/comments; will either get all guests or create a comment
router.route('/').get(getAllComments).post(createComment);

//this will handle updating, deleting, or getting a comment by their ID; localhost:3001/paradise/comments/:id
router.route('/:id').get(getCommentByID).put(updateComment);

//exports 
module.exports = router;