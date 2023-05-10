const con = require("../mysql-connection");

module.exports = {
    find: () => {
        return con.select().from("turmas");
    },
    pegar_id: (id) => {
        return con.select().from("turmas").where("id", "=", id);
    },
    inserir: (turma) => {
        return con.insert(turma).into("turmas");
    },
    deletar: (id) => {
        return con("turmas").where({ id: id }).del();
    },
    atualizar: (turma, id) => {
        return con("turmas").update(turma).where({ id: id });
    },
    capeta:()=>{
        return con.select('turmas.NRO_SALA', 'turmas.ID')
                .from('turmas')
                .innerjoin('alunos', 'turmas.id', '=', 'alunos.turmas_id')
                .innerjoin('professores', 'turmas.id', '=', 'professor.turmas_id')
    }
}