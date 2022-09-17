const express = require('express');

const router = express.Router();

const siteControllers = require('../app/controller/SiteControllers');

router.get('/data/create', siteControllers.create);
router.post('/data/store', siteControllers.store);   // router.get/post/put : đặt tên theo đúng method
router.get('/data/:id/edit', siteControllers.edit);
router.put('/data/:id', siteControllers.update);
router.delete('/data/delete/:id', siteControllers.destroy);
router.get('/', siteControllers.index);

module.exports = router;
