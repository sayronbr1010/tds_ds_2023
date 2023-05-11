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
        return con
        .select('T.NRO_SALA', 'A.NOME AS ALUNO','P.NOME AS PROFESSOR')
        .from('TURMAS AS T')
        .innerjoin('ALUNOS AS A', 'T.ALUNO_ID','A.ID') 
        .innerjoin('PROFESSOR AS P', 'T.PROFESSORES_ID','P.ID')
    }
}