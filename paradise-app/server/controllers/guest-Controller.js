const {Guest} = require('../models');

//controller for the guests... will include an create, update, delete, and get
const guestController = {
//getting all of the guests address
getAllGuests(req, res) {
    Guest.find({})
    .select("-__v")
    .then((guestData) => res.status(200).json(guestData))
    .catch((err) => {
        console.log(err);
        res.status(400).json({message: 'Could not find guests'});
    });
},

//getting a guest by their id
getGuestByID(req, res) {
    Guest.findOne({_id: req.params.id})
        .select("-__v")
        .then((guestData) => {
            if(!guestData) {
                return res.status(404).json({message: "Sorry! Could not find that specific guest!!"})
            }
            return res.status(200).json(guestData);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
}, 

//creating a new guest
createGuest(req, res) {
    Guest.create(req.body)
        .then((guestData) => {
            res.status(200).json({message: `Guest ${guestData.name} was invited to Paradise!!🎉`});
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
},

//to update a guest's information
updateGuest(req, res) {
    Guest.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { runValidators: true, new: true }) //new: after update, see the updated object
        .then((guestData) => {
            if (!guestData) {
                return res.status(404).json({message: "Could not update Guest"});
            }
            res.status(200).json({message: "Updated the Guest!"});
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
},

//deleting a guest 
deleteGuest(req, res) {
    User.findOneAndDelete({_id: req.params.id})
            .then((guestData) => {
                if (!guestData) {
                    return res.status(404).json({message: "Could not delete the guest"});
                }
            })
            .then(() => {
                res.status(200).json({message: `Deleted the guest!!`});
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    }
};

module.exports = guestController;