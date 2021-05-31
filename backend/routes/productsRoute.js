const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/main", productController.getHomePage);
router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getSingleProduct);
router.delete("/products-delete/:id", productController.deleteProduct);
router.post("/products-add/:id", productController.addProduct);
router.put("/product-edit/:id", productController.editProduct);
router.get("/*", productController.get404Page);


module.exports = router;