const mongoose = require("mongoose");

async function mongoDbConnection(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("mongodb connected to nodejs_ex"))
    .catch((err) => console.log("mongo error at nodejs_ex"));
}

module.exports = { mongoDbConnection };
