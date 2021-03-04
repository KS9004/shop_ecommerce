const express = require('express');
const router = express.Router();

const {getProducts, newProduct}= require('../controller/productController');

router.route('/products').get(getProducts);
router.route('/products/new').post(newProduct);

module.exports = router;