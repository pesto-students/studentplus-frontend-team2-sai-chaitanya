const express = require('express');

const ManagerCtrl = require('../controllers/managerController');

const router = express.Router();

router.post('/manager', ManagerCtrl.createManager);
router.post('/change-password', ManagerCtrl.changePassword);
router.get('/manager/:id', ManagerCtrl.getManagerById);
router.put('/manager/:id', ManagerCtrl.updateManager);
router.get('/managers', ManagerCtrl.getManagers);
/* router.post('/okta-student/', StudentCtrl.getOktaUser); */

module.exports = router;
