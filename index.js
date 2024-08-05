const Express = require("express");
const cors = require("cors");
const app = Express();
const PORT = 8080;
app.use(cors());


app.get("/", (req, res) => {
    res.statusCode(200).json({ msg: "Hello, World!"});
})

app.listen(PORT, () => {
    console.log("Server Started On Post", PORT)
})