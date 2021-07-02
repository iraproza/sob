const Product = require("../models/product");

const catchErrors = require("../middleware/catchErrors");
const APIExtends = require("../helpers/api");

exports.getProducts = catchErrors(async(req, res, next) => {
    const resPerPage = 16;
    const productsCount = await Product.countDocuments();

    const apiFeatures = new APIExtends(Product.find(), req.query)
        .search()
        .filter()

    let products = await apiFeatures.query;
    let filteredProductsCount = products.length;

    apiFeatures.pagination(resPerPage)
    products = await apiFeatures.query;


    res.status(200).json({
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    })
})

exports.getSingleProduct = catchErrors(async (req, res, next) => {
    const product = await Product.findById({ _id: req.params.id });
    res.status(200).json({
        success: true,
        message: "getSingleProduct",
        product
    })
})


exports.addProduct = catchErrors(async(req, res, next) => {
    const product = await Product.create(req.body)
    
    res.status(200).json({
        success: true,
        message: "addProduct",
        product
    })
})

exports.deleteProduct = catchErrors(async(req, res, next) => {
    const idDeleteProduct = req.params.id;
    const products = await Product.deleteOne({_id: req.params.id});
    res.status(200).json({
        success: true,
        idDeleteProduct
    })
})

exports.editProduct = catchErrors(async(req, res, next) => {
    const productEdit = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        success: true,
        productEdit
    })
})

exports.get404Page = catchErrors((req, res, next) => {
    res.status(404).json({
        success: true,
        message: "Page-404"
    })   
})

exports.getHomePage = catchErrors((req, res, next) => {
    res.status(200).json({
        success: true,
        message: "getHomePage"
    })
})