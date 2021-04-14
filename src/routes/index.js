const { Router } = require('express');
const { Usuario, Nota} = require('../models')

const router = Router();

router.get('/users/list', async (req, res) => {
  try {
    let result = await Usuario.findAll();
    return res.status(200).json(result)
  } catch (error) {
    return res.status(400).json({ message: 'Error: ' + error.message })
  }
})

module.exports = router