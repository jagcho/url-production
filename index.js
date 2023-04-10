const express = require("express")
const bodyParser = express.json()
const mongoose = require("mongoose")
const app = express()
const route = require("./routes/route")

app.use(bodyParser)

var cors = require('cors')

app.use(cors())

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

mongoose.connect("mongodb+srv://Jagcho:71nEXJtXcYfVx8T6@cluster0.5bg4mzz.mongodb.net/Url-Shortner"
    , { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use("/", route)



app.listen(process.env.PORT || 5000, function () { console.log("Express is running on port " + (process.env.PORT || 5000)) });