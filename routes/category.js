const Category = require("../models/Category");

const router = require("express").Router();

router.post("/category", async (req, res) => {
  const data = req.body;
  try {
    let category = new Category(data);
    await category.save();
    console.log("Create category");
    res.send(category);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

router.delete("/category/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(400).send("There is no existing category");
    }
    await Category.findByIdAndDelete(req.params.id);
    res.send("Category deleted");
  } catch (err) {
    console.error(err.message);
  }
});
