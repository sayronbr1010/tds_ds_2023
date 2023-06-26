const express = require("express");
const petsController = require("../controller/pets.controller");

const routes = new express.Router();

routes.get("/pet", petsController.find_pet);
routes.get("/dono", petsController.find_dono);
routes.get("/pet/:id([0-9]+)", petsController.perereca);
routes.get("/dono/:id([0-9]+)", petsController.salada_de_fruta);

routes.get("/", (req, res) =>
  res.render("inicios")
);

module.exports = routes;
