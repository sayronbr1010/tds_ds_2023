const professorRepository = require("../repository/professor.repository");

module.exports = {
    find: (req, res) => {
        professorRepository
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
        professorRepository
            .pegar_id(id)
            .then(result => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserir: (req, res) => {
        const professor = req.body;
        professorRepository
            .inserir(professor)
            .then(() => {
                res.send({ msg: "inserido", funcionario, });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        professorRepository
            .deletar(id)
            .then(() => {
                res.send({ msg: "deletado"});
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    atualizar: (req, res) => {
        const professor = req.body;
        const { id } = req.params;

        professorRepository
            .atualizar(professor,id)
            .then(() => {
                res.send({ msg: "atualizada",
                professor,
            });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
}