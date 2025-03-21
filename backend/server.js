
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());  // To parse JSON body

app.get('/', (req, res) => {
    res.send("Backend Server Running!");
});

// Add routes here (e.g., /auth, /profile)

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
