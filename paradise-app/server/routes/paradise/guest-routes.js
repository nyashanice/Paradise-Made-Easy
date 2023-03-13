const router = require('express').Router();
const {
    getAllGuests, 
    getGuestByID,
    createGuest,
    updateGuest,
    deleteGuest
} = require('../../controllers/guest-Controller');

//route to root of the page, localhost:3001/paradise/guests; will either get all guests or create a guest
router.route('/').get(getAllGuests).post(createGuest);

//this will handle updating, deleting, or getting a guest by their ID; localhost:3001/paradise/guests/:id
router.route('/:id').get(getGuestByID).put(updateGuest).delete(deleteGuest);

//exports 
module.exports = router;