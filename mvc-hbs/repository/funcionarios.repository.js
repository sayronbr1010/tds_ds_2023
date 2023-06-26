const con = require("../mysql-connection");

module.exports = {
  buscaTodos: () => {
    return con.select().from("funcionarios").orderByRaw("id desc");
  },
  VEM_X1: () => {
    return con.select().from("funcionarios").orderByRaw("id desc");
  },
  buscaPorId: (id) => {
    return con.select().from("funcionarios").where("id", "=", id);
  },
  inserir: (funcionario) => {
    return con.insert(funcionario).into("funcionarios");
  },
  deletar: (id) => {
    return con("funcionarios").where({ id: id }).del();
  },
  atualizar: (funcionario, id) => {
    return con("funcionarios").update(funcionario).where({ id: id });
  },
  buscaTodosDepDoFunc: () => {
    return con("funcionarios").innerJoin(
      "dependentes",
      "funcionarios.id",
      "dependentes.funcionario_id"
    );
  },
  buscaDepDoFunc: (id) => {
    return con
    .select().from("FUNCIONARIOS")
    .innerJoin("DEPENDENTES", "FUNCIONARIOS.ID", "DEPENDENTES.FUNCIONARIO_ID")
    .where("FUNCIONARIOS.ID", id);
  },
  inserirDependentes: (parametro) => {
    return con.insert(parametro).into("dependentes");
  },
};
