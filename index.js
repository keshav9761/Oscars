const Express = require("express");
const app = Express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.listen(PORT, () => {
   console.log("Server Started On Post", PORT)
})