const router = require('express').Router();
const paradiseRoutes = require('./paradise')

//adding /paradise to the url of the project; localhost:3001/paradise

router.use("/paradise", paradiseRoutes);

//in case the wrong url is entered
//default message if a wrong route is sent
router.use((req, res) => {
    return res.send("Oh No...WRONG ROUTE");
});


//exporting
module.exports = router;