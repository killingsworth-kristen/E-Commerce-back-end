const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include:[Product]
  }).then(allCategories=> {
    res.json(allCategories)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
  
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    // be sure to include its associated Products
    include: [Product]
  }).then(oneCategory=>{
    if(!oneCategory) {
      res.status(404).json({msg: `This page does not exist!`})
    }
    res.json(oneCategory)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
  
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
}).then(newCategory=>{
  res.json(newCategory)
}).catch(err=>{
  console.log(err);
  res.status(400).json(err);
});
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },{
    where: {
      id: req.params.id
    }
  }).then(updatedCategory=>{
    if(!updatedCategory) {
      res.status(404).json({msg: `This page does not exist!`})
    }
    res.json(updatedCategory)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(deleteCategory=>{
    if (deleteCategory === 0) {
      res.status(404).json({msg: `This page does not exist!`})
    }
    res.json(deleteCategory)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
});

module.exports = router;
