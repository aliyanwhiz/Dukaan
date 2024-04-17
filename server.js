const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const cors = require("cors")
const connentDB = require('./config/config')
dotenv.config()

const app = express()

connentDB()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends: false}))
app.use(morgan("dev"))



app.use('/api/items', require('./routes/itemRoutes'))


const PORT = process.env.PORT || 5000





app.listen(PORT, () => {
    console.log(`server is active on port localhost:${PORT}`);
    
})