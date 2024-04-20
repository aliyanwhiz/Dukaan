const express = require('express')
const { getItemController,addItemController,editItemController } = require('../controllers/itemController')

const router = express.Router()


//routes
//get method
router.get('/get-item',getItemController)

//post method
router.post('/add-item',addItemController)

//post method
router.put('/edit-item',editItemController)




module.exports = router