const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', aysnc (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
  
      res.json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
