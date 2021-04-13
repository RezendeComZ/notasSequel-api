const express = require('express');
const cors = require('cors')
const app = express();
const routes = require("./routes")
const PORT = 3030;

app.use(cors())
app.use(express.json()) // Define content-type
app.use('/api', routes)

app.listen(PORT, () => console.log('server running at ' + PORT))