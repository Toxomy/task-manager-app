const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require('./db/connect');
require("dotenv").config();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());

//route
app.get("/hello", (req, res) => {
    res.send("hello task manager")
});

app.use('/api/v1/tasks', tasks);

const port = 5000;
const start = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/danik';
        await connectDB(mongoURI);
        app.listen(port, console.log(`Server is listening to port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();