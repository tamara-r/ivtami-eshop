const express = require('express');
const router = express.Router();


const { getProducts,
        getAllProducts, 
        newProduct, 
        getSingleProduct, 
        updateProduct, 
        deleteProduct,
        getAdminProducts,
        createProductReview,
        getProductReviews,
        deleteReview,
        
    } = require('../controllers/productController');

// middlewares imports
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/products').get(getProducts);
router.route('/allproducts').get(getAllProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);
router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizeRoles('admin'),deleteProduct);
router.route('/admin/products').get(getAdminProducts);


router.route('/review').put(isAuthenticatedUser, createProductReview);	
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);	
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);	
	
module.exports = router;