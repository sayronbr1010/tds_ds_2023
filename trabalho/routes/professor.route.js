const express = require("express");
const professorController = require("../controller/professor.controller");

const routes = new express.Router();

routes.get("/",professorController.find);
routes.get("/:id([0-9]+)", professorController.pegar_id);
routes.post("/", professorController.inserir);
routes.delete("/:id([0-9])+", professorController.deletar);
routes.put("/:id([0-9])+", professorController.atualizar);

module.exports = routes;