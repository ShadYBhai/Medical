import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ashish",
    email: "ashish@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "brock lesner",
    email: "brocklesner@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "riya thakur",
    email: "riyathakur@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
