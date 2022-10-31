import dotenv from "dotenv";
import users from "./data/users.js";
import categories from "./data/category.js";
import Category from "./model/Category.js";
import products from "./data/products.js";
import User from "./model/UserModel.js";
import Product from "./model/ProductModel.js";
import Order from "./model/OrderlModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
const importCategoryData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await Category.insertMany(categories);
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

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

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

