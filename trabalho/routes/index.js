const express = require("express");
const turmaRoutes = require("./turma.routes");
const alunoRoutes = require("./aluno.routes");
const professorRoutes = require("./professor.route");

const routes = new express.Router();

routes.use("/turma", turmaRoutes);
routes.use("/aluno", alunoRoutes);
routes.use("/professor", professorRoutes);

module.exports = routes;