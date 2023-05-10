const con = require("../mysql-connection");

module.exports = {
    find: () => {
        return con.select().from("funcionarios");
    },
    pegar_id: (id) => {
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
    BTDF: () => {
        return con("funcionarios").innerJoin("dependentes", "funcionarios.id", "dependentes.funcionario_id")
    },
    BDF: (id) => {
        return con.select("FUN.ID","FUN.NOME AS NOME_FUNCIONARIO","DEP.NOME AS NOME_DEPENDENTE","DEP.TELEFONE AS TELEFONE_DEPENDETE")
        .from("FUNCIONARIOS AS FUN")
        .innerJoin("DEPENDENTES AS DEP", "FUN.ID", "DEP.FUNCIONARIO_ID").where("FUN.ID",id);
    }
}