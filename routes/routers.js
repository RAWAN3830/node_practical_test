// const express = require("express");
// const router = express.Router();
// const authController = require("../controller/auth_controller");
// const storeController = require("../controller/stoe_controller");

// router.post("/register", authController.register);
// router.post("/login", authController.login);
// router.post("/addstore",storeController.addStore);
// router.get("/getallstores",storeController.getStores);
// router.get("/:id",storeController.getStoreById)
// router.post("/store/:id/items", storeController.addItemToStore);
// router.get("/stores", storeController.getStores);


// module.exports = router;


const express = require("express");
const router = express.Router();
const authController = require("../controller/auth_controller");
const storeController = require("../controller/stoe_controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/addstore", storeController.addStore);
router.get("/getallstores", storeController.getStores);
router.get("/store/:id", storeController.getStoreById);
router.post("/store/:id/items", storeController.addItemToStore);

module.exports = router;