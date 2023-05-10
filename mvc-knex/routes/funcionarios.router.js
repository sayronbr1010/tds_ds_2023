const express = require("express");
const funcionariosController = require("../controller/funcionarios.controller") 

const routes = new express.Router();

routes.get("/",funcionariosController.tudo);
routes.get("/:id([0-9]+)",funcionariosController.pegar_id);
routes.post("/",funcionariosController.inserir);
routes.delete("/:id([0-9]+)",funcionariosController.deletar);
routes.put("/:id([0-9]+)",funcionariosController.atualizar);
routes.get("/dependentes",funcionariosController.BTDF);
routes.get("/dependentes/:id([0-9]+)",funcionariosController.BDF);

module.exports = routes;