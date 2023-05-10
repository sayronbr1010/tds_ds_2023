const express = require("express");
const alunoController = require("../controller/aluno.controller") 

const routes = new express.Router();

routes.get("/",alunoController.find);
routes.get("/:id([0-9]+)", alunoController.pegar_id);
routes.post("/", alunoController.inserir);
routes.delete("/:id([0-9])+", alunoController.deletar);
routes.put("/:id([0-9])+", alunoController.atualizar);

module.exports = routes;