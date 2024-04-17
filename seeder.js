// const mongoose = require('mongoose')
const dotenv = require("dotenv")
const data = require("./utils/data")
const Items = require('./models/Item_model')
const connectDB = require('./config/config')

dotenv.config()
connectDB()

const importData = async () => { 
    try {
        await Items.deleteMany()
        const itemData = await Items.insertMany(data)
        console.log(`all items added`);
        process.exit()
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

importData()
