const express = require("express");
const routes = new express.Router();

const petsRoutes = require("./pets.router");

routes.use("/petwise", petsRoutes);

module.exports = routes;    