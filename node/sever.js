const express = require("express");

const app = express();

app.get("/inicio", [], (request, response) => {
    response.send("Hello");
});

//nativo do js do express ja, padrao pra nos
const bodyParser = require('body-parser');

//usamos no app 
app.use(bodyParser.json());

//app faz o convet pra dar certo 
app.post("/login", (request, response) => {
    response.send(request.body);
});

app.listen(8002, (error) => {
    if(error){
        console.error(error);
    }
    else{
        console.log("Servidor esta rodando na porta 8080");
    }
});