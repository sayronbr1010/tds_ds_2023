const turmaRepository = require("../repository/turma.repository");

module.exports = {
    find: (req, res) => {
        turmaRepository
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
        turmaRepository
            .pegar_id(id)
            .then(result => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserir: (req, res) => {
        const turma = req.body;
        turmaRepository
            .inserir(turma)
            .then(() => {
                res.send({ msg: "inserido", funcionario, });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        turmaRepository
            .deletar(id)
            .then(() => {
                res.send({ msg: "deletado"});
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    atualizar: (req, res) => {
        const turma = req.body;
        const { id } = req.params;

        turmaRepository
            .atualizar(turma,id)
            .then(() => {
                res.send({ msg: "atualizada",
                turma,
            });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    capeta: (req, res) => {
        turmaRepository
        .capeta()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
},
}