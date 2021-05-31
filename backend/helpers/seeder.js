const Product = require("../models/product");
const User = require("../models/user");
const dotenv = require('dotenv');
const connectDatabase = require("../config/database");

const products = require("../data/products.json");
const users = require("../data/user.json");

dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log("All products are deleted.")

        await Product.insertMany(products);
        console.log("All products are added.")

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}
const seedUser = async () => {
    try {
        await User.deleteMany();
        console.log("All user are deleted.")

        await User.insertMany(users);
        console.log("All user are added.")

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();
seedUser(); 