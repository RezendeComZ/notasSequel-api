const { Router } = require('express');
const { Usuario, Nota } = require('../models')

const router = Router();

//GET:
// Returning a user list
router.get('/users/list', async (req, res) => {
  try {
    let result = await Usuario.findAll();
    return res.status(200).json(result)
  } catch (error) {
    return res.status(400).json({
      message: 'Error: ' + error.message
    })
  }
});

router.get('/allPostsByUser', async (req, res) => {
  try {
    let { user_id } = req.body
    let allPostsByUser = await Nota.findAll({
      where: {
        user_id
      }
    })
    return res.status(200).json(allPostsByUser)
  } catch (error) {
    return res.status(400).json({
      message: 'Error: ' + error.message
    })
  }
});

router.get('/allPosts', async (req, res) => {
  try {
    let allPosts = await Nota.findAll();
    return res.status(200).json(allPosts)
  } catch (error) {
    return res.status(400).json({
      message: 'Error: ' + error.message
    })
  }
});


// POST:
router.post('/post', async (req, res) => {
  try {
    let post = await Nota.create({ ...req.body });
    return res.status(201).json(post)
  } catch (error) {
    return res.status(400).json({
      message: 'Error: ' + error.message
    })
  }
})
/*
Insomnia POST example:
{
	"user_id": 1,
	"title": "Via insomnia",
	"body": "e o body"
}
*/

// Deletar
router.post('/deletePost/:id', async (req, res) => {
  let deletePostId = parseInt(req.params.id);
  try {
    let deleted = await Nota.destroy({
      where: {
        nota_id: deletePostId
      }
    })
    return res.status(201).json(deleted)
  } catch (error) {
    return res.status(400).json({
      message: 'Error: ' + error.message
    })
  }

})

module.exports = router