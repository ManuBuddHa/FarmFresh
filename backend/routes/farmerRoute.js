const express = require('express');
const router = express.Router();
const FarmerController = require('../controllers/farmerController');

router.post('/register', FarmerController.createFarmer);
router.get('/view', FarmerController.viewFarmers);
router.put('/update/:id', FarmerController.updateFarmer);
router.delete('/delete/:id', FarmerController.deleteFarmer);

module.exports = router;
