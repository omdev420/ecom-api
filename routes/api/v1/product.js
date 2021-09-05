const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const productController = require("../../../controllers/api/v1/product-controller");

router.post(
  "/create",
  [
    body("name").not().isEmpty().withMessage("Name is required."),
    body("quantity").isFloat({ gt: 0 }).withMessage("Quantity is less than 0."),
  ],
  productController.createProduct
);
router.get("/all", productController.getProduct);

module.exports = router;
