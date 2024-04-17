const Items = require('../models/Item_model')


const getItemController = async (req,res) => {
    try {
        const items = await Items.find()
        res.status(200).send(items)
    } catch (error) {
        console.log(error);
    }
}
const addItemController = async (req, res) => {
    try {
        const newItem = new Items(req.body)
        await newItem.save();
        res.status(200).send('item Created SuccessFully!')
    } catch (error) {
        res.status(400).send("error :" , error)
        console.log(error);
    }
}

module.exports = { getItemController,addItemController }