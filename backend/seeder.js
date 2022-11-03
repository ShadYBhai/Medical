import dotenv from "dotenv";
import Category from "./model/Category.js";
import User from "./model/UserModel.js";
import Order from "./model/OrderlModel.js";
import Product from "./model/ProductModel.js";
import connectDB from "./config/db.js";

import viSa from "./data/viSa.js";
import products from "./data/products.js";
import syrups from "./data/syrups.js";
import tablets from "./data/tablets.js";
import Hfd from "./data/Hfd.js";
import familyN from "./data/familyN.js";
import homeopathy from "./data/homeopathy.js";
import users from "./data/users.js";
import categories from "./data/category.js";

dotenv.config();

connectDB();
const importCategoryData = async () => {
  try {
    await Category.deleteMany();

    await Category.insertMany(categories);

    console.log("Categories Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    // await Product.insertMany(sampleProducts);
    await Product.insertMany(viSa);
    await Product.insertMany(products);
    await Product.insertMany(syrups);
    await Product.insertMany(tablets);
    await Product.insertMany(Hfd);
    await Product.insertMany(familyN);
    await Product.insertMany(homeopathy);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

switch (process.argv[2]) {
  case "-d":
    destroyData();
    break;
  case "-i":
    importData();
    break;
  case "-ic":
    importCategoryData();
    break;

  default:
    process.exit(1);
    break;
}
