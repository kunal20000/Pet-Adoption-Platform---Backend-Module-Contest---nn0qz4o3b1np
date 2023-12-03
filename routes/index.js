const express = require('express');
const petRoutes = require('./petRoutes');
const adoptionRoutes = require('./adoptionRoutes');

const router = express.Router();

router.use('/pets', petRoutes);
router.use('/adoptions', adoptionRoutes);

module.exports = router;
