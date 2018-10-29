const { Router } = require('express')
const Cart = require('../db/cart')

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const carts = awaitCart.findAll()
    return res.json(carts)
  } catch (e) {
    next(e)
  }
})
