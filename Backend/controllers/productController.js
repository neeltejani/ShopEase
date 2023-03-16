const productModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
//create product admin only...
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await productModel.create(req.body);
  res.status(201).json({ suceess: true, product });
});

//update product admin only...
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  console.log("entered update function");
  let product = await productModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found for this id", 404));
  }

  product = await productModel.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({ success: true, product });
});

// delete product for admin only

exports.deleteProduct = catchAsyncError(async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found for this id", 404));
  }

  await productModel.findByIdAndRemove(req.params.id);

  res
    .status(200)
    .json({ success: true, message: "Item has been deleted successfully" });
});

exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const products = await productModel.find();
  res.status(200).json({ success: true, products });
});

//get single product

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await productModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});
