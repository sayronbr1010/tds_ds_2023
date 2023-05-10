const express = require("express");
const routes = require("./routes/index");
const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server 8080");
});