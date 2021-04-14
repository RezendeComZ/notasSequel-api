const { Router } = require('express');
const { Usuario, Nota} = require('../models')

const router = Router();

// Returning a user list
router.get('/users/list', async (req, res) => {
  try {
    let result = await Usuario.findAll();
    return res.status(200).json(result)
  } catch (error) {
    return res.status(400).json({ message: 'Error: ' + error.message })
  }
});

// Post:
router.post('/post', async (req, res) => {
  try {
    console.log("chegou no try")
    let post = await Nota.create({...req.body});
    return res.status(201).json(post)
  } catch (error) {
    console.log("chegou no erro")
    return res.status(400).json({ message: 'Error: ' + error.message })
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

module.exports = router