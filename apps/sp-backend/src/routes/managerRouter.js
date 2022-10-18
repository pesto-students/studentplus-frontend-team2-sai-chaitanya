const express = require('express');

const ManagerCtrl = require('../controllers/managerController');

const router = express.Router();

router.post('/manager', ManagerCtrl.createManager);
router.get('/manager/:id', ManagerCtrl.getManagerById);
router.put('/manager/:id', ManagerCtrl.updateManager);
/* router.post('/okta-student/', StudentCtrl.getOktaUser); */

module.exports = router;
