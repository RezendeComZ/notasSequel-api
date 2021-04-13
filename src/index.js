const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3030;

app.use(cors())
app.use(express.json()) // Define content-type

app.listen(PORT, () => console.log('server running at ' + PORT))