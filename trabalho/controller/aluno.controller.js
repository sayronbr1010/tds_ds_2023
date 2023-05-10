const alunoRepository = require("../repository/aluno.repository");

module.exports = {
    find: (req, res) => {
        alunoRepository
            .find()
            .then(result => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    pegar_id: (req, res) => {
        const { id } = req.params;

        if (!id) {
            req.status(404).send({ msg: "parametro id obrigatorio" });
        }
        alunoRepository
            .pegar_id(id)
            .then(result => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserir: (req, res) => {
        const aluno = req.body;
        alunoRepository
            .inserir(aluno)
            .then((data) => {
                res.send({ msg: "inserido", data });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        alunoRepository
            .deletar(id)
            .then(() => {
                res.send({ msg: "deletado"});
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    atualizar: (req, res) => {
        const aluno = req.body;
        const { id } = req.params;

        alunoRepository
            .atualizar(aluno,id)
            .then(() => {
                res.send({ msg: "atualizada",
                aluno,
            });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
}