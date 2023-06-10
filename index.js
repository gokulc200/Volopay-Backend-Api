const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3009;

const apiData = require("./data.json");

app.get("/",(req,res) => {
    res.send("Hello world");
});

app.get("/cards",(req,res) => {
    res.send(apiData);
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})