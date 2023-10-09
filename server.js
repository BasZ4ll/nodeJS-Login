const express = require("express");
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
// const productRouter = require('./Router/product')
const connectDB = require('./config/db')

const app = express();

connectDB();

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'}))
//ตัวอย่าง1
// app.get("/product", (req, res) => {
//     res.send('hello')
// });

//ตัวอย่างที่ 2
// app.use('/api',productRouter)

//ตัวอย่างที่ 3
readdirSync('./Router')
.map((r)=> app.use('/api', require('./Router/' + r)))

app.listen(5000, () => console.log("server running on port 5000"));
