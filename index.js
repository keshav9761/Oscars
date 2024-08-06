const Express = require("express");
const cors = require("cors");
const app = Express();
const PORT = 8080;

app.use(cors());


app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hello, World!", hi: "I am working"});
})

app.get("/5", (req, res) => {
    res.status(200).json({ msg: "Hi"});
})

app.listen(PORT, () => {
    console.log("Server Started On Post", PORT)
})