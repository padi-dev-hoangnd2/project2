const express = require('express');

const router = express.Router();

const siteControllers = require('../app/controller/SiteControllers');


router.get('/', siteControllers.index);

module.exports = router;
