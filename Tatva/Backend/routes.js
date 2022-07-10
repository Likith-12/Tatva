const express = require('express');
const Controller = require('./Controller');

const router = express.Router();

router.get('/create', Controller.recipe_create_get);
router.get('/', Controller.recipe_index);
router.post('/', Controller.recipe_create_post);
router.get('/:id', Controller.recipe_details);
router.delete('/:id', Controller.recipe_delete);

module.exports = router;