const express = require("express");
const bodyParser = require("body-parser");
const {mongoDbConnection} = require("./view/mongodb_connection");
const authRoutes = require("./routes/routers");
// const storeRoutes = require("./routes/store_routes");

const app = express();
const port = 8000;
const localIp = "192.168.113.67"; // Replace with your local IP address

app.use(bodyParser.json());

mongoDbConnection("mongodb://localhost:27017/foodNinja", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/user", authRoutes);
app.use("/stores", authRoutes);

app.listen(port, localIp, () =>
  console.log(`Server started at http://${localIp}:${port}`)
);

