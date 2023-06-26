const express = require("express");
const hbs = require("hbs");
const routes = require("./routes/index");

const app = express();

app.use(express.json());

hbs.registerPartials(`${__dirname}/views`);
app.set("view engine","hbs");
app.set("view options",{
    layout:"layouts/default"
})
app.use(express.static("public"));

app.use(routes);

hbs.registerHelper("formataCPF", (data) => {
  return data
    .replace(/[^\d]/g, "")
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
});

hbs.registerHelper("formataTelefone", (data) => {
  return data
    .replace(/[^\d]/g, "")
    .replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
});

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Servidor rodando na porta 8080!");
});

