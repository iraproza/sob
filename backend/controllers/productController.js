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
    const products = await Product.insertMany(
        {
            "name": "Vivienne Sabo Fixateur Gel",
            "price": 97,
            "descriptions": "Кожен професійний візажист підтвердить, що форма, товщина, відтінок брів може кардинально перетворити вашу зовнішність як на краще, так і, на жаль, на гірше. Багато дівчат, як не дивно, витрачають багато часу на макіяж очей, ретельно промальовують стрілки, підбирають відтінки тіней, колір туші для вій, абсолютно забуваючи доглядати за бровами. Адже всього кілька штрихів спеціальним фіксувальним гелем для брів, здатні додати образу того самого відсутнього ефекту «вау!»",
            "images": [
                {
                    "product_id": "products/g2030405",
                    "url": "https://u.makeup.com.ua/z/zp/zpplurajadi5.jpg"
                }
            ],
            "composition": "вода, ПВП, ПЕГ-40 гідрована рицинова олія, пропілен гліколь, акрилати/С10-30 алкіл акрилати кросполімер, пантенол, триетаноламін, феноксіетанол.",
            "category": "Make-up",
            "how-use": "нанесіть необхідну кількість гелю на брови, надаючи їм бажану форму.",
            "stock": 10,
            "reviews": []
        }
    )  
    res.status(200).json({
        success: true,
        message: "addProduct",
        products
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
    const productEdit = await Product.findById({_id: req.params.id});
    res.status(200).json({
        success: true,
        // message: "editProduct",
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