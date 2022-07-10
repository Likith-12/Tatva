const Recipe = require('./models/recipe')

const recipe_index = (req, res) => {
    Recipe.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { recipe: result, title: 'Our Recipes' });
      })
      .catch(err => {
        console.log(err);
      });
  }

  const recipe_details = (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
      .then(result => {
        res.render('details', { recipe: result, title: 'Recipe Details' });
      })
      .catch(err => {
        console.log(err);
        res.render('error', { title: 'Recipe unavailable' });
      });
  }

  const recipe_create_get = (req, res) => {
    res.render('create', { title: 'Add new recipe' });
  }

  const recipe_create_post = (req, res) => {
    const recipe = new Recipe(req.body);
    recipe.save()
      .then(result => {
        res.redirect('/recipes');
      })
      .catch(err => {
        console.log(err);
      });
  }

  const recipe_delete = (req, res) => {
    const id = req.params.id;
    Recipe.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/recipe' });
      })
      .catch(err => {
        console.log(err);
      });
  }

  module.exports = {
    recipe_index, 
    recipe_details, 
    recipe_create_get, 
    recipe_create_post, 
    recipe_delete
  }
  