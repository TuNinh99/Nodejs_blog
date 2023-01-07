/*
 * Route cho các trang không thuộc tài nguyên cụ thể nào
 * Ex: Home, Search, Contact
 */

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;
