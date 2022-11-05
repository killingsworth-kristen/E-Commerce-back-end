const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
    include:[Product]
  }).then(allTags=> {
    res.json(allTags)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {
    // be sure to include its associated Product data
    include: [Product]
  }).then(oneTag=>{
    if(!oneTag) {
      res.status(404).json({msg: `This page does not exist!`})
    }
    res.json(oneTag)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
  
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(newTag=>{
    res.json(newTag)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },{
    where: {
      id: req.params.id
    }
  }).then(updatedTag=>{
    if(!updatedTag) {
      res.status(404).json({msg: `This page does not exist!`})
    }
    res.json(updatedTag)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(deleteTag=>{
    if (deleteTag === 0) {
      res.status(404).json({msg: `This page does not exist!`})
    }
    res.json(deleteTag)
  }).catch(err=>{
    console.log(err);
    res.status(400).json(err);
  });
});

module.exports = router;
