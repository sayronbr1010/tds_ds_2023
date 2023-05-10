const express = require("express");
const turmaController = require("../controller/turma.controller") 

const routes = new express.Router();

routes.get("/",turmaController.find);
routes.get("/:id([0-9]+)", turmaController.pegar_id);
routes.post("/", turmaController.inserir);
routes.delete("/:id([0-9])+", turmaController.deletar);
routes.put("/:id([0-9])+", turmaController.atualizar);
routes.get("/aafolu",turmaController.capeta);

module.exports = routes;