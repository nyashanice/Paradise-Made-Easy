const {Comment} = require('../models');

const commentController = {
    
    //this will get all of the comments
    getAllComments(req, res) {
        Comment.find({})
            .select("-__v")
            .then((commentData) => res.status(200).json(commentData))
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: 'Could not find comments'});
            });
    },

    //getting a comment by its id
    getCommentByID(req, res) {
        Comment.findOne({_id: req.params.id})
        .select("-__v")
        .then((commentData) => {
            if(!commentData) {
                return res.status(404).json({message: "Sorry! Could not find that specific comment!!"})
            }
            return res.status(200).json(commentData);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //creating a comment
    createComment(req, res) {
        Comment.create(req.body)
        .then((commentData) => {
            res.status(200).json({message: `Created a comment!!`});
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //updating a comment
    updateComment(req, res) {
        Comment.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { runValidators: true, new: true }) //new: after update, see the updated object
            .then((guestData) => {
                if (!guestData) {
                    return res.status(404).json({message: "Could not update Comment"});
                }
                res.status(200).json({message: "Updated the Comment!"});
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    }
};

module.exports = commentController;