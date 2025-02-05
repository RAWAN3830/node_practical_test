// const store = require("../model/strore_schema");
// const mongoose = require("mongoose");


// exports.addStore = async (req, res) => {
//     try {
//         const { name, location } = req.body;
    
//         if (!name || !location) {
//           return res.status(400).json({ error: "Name and location are required." });
//         }
    
//         const newStore = new store({ name, location });
//         const savedStore = await newStore.save();
    
//         res.status(201).json({ message: "Store created successfully!", store: savedStore });
//       } catch (error) {
//         res.status(500).json({ error: "Server error. Please try again." });
//       }
// }

// exports.getStores = async (req,res) => {
//     try {
//         const stores = await store.find();
//         res.status(200).json({stores});
//     }catch (error) {
//         res.status(500).json({ error: "Server error. Please try again." });
//       }
// }


// exports.getStoreById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ error: "Invalid Store ID format" });
//     }

//     const stores = await store.findById(id);

//     if (!stores) {
//       return res.status(404).json({ error: "Store not found" });
//     }

//     res.status(200).json(stores);
//   } catch (error) {
//     res.status(500).json({ error: "Server error. Please try again." });
//   }
// };

const Store = require("../model/strore_schema");

exports.addStore = async (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name || !location) {
      return res.status(400).json({ error: "Name and location are required." });
    }

    const newStore = new Store({ name, location });
    const savedStore = await newStore.save();

    res
      .status(201)
      .json({ message: "Store created successfully!", store: savedStore });
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again." });
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again." });
  }
};

exports.getStoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findById(id);

    if (!store) {
      return res.status(404).json({ error: "Store not found." });
    }

    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again." });
  }
};

exports.addItemToStore = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemId, name, rating, price } = req.body;

    if (!itemId || !name || !rating || !price) {
      return res
        .status(400)
        .json({ error: "Item ID, name, rating, and price are required." });
    }

    const store = await Store.findById(id);
    if (!store) {
      return res.status(404).json({ error: "Store not found." });
    }

    const newItem = { id: itemId, name, rating, price };
    store.items.push(newItem);
    const updatedStore = await store.save();

    res
      .status(201)
      .json({ message: "Item added successfully!", store: updatedStore });
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again." });
  }
};