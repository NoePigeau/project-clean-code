const express = require('express')
const dotenv = require('dotenv')
var cors = require('cors')


dotenv.config()

const PORT = 3001;

const app = express()
app.use(express.json())
app.use(cors())

app.use("/users", require("./routes/user"))
app.use("/cards", require("./routes/card"))

app.get('/', (req, res) => {
    res.send('default path, hello to cleancode project')
})

app.listen(PORT, () => console.log(`app is listening on: http://localhost:${PORT}!`))