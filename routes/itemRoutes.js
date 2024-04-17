const express = require('express')
const { getItemController,addItemController } = require('../controllers/itemController')

const router = express.Router()


//routes
//get method
router.get('/get-item',getItemController)

//post method
router.post('/add-item',addItemController)




module.exports = router