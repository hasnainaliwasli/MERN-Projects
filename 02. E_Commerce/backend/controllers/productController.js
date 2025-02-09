const catchAsyncError = require("../middleware/catchAsyncError.js");
const Product = require("../models/productModel.js");
const ErrorHandler = require("../utils/errorhandler.js");

// Create Product
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Products
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

// Update Product
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id); // Fixed: added `await`
  if (!product) {
    return next(new ErrorHandler("Product not found", 404)); // Consistent error handling
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true, // Fixed typo `runValidator` → `runValidators`
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product
exports.deleteProduct = catchAsyncError(async (req, res, next) => {

  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully!",
  });
});

// Get Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {

  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});
