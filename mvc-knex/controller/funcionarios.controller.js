const funcionariosRepository = require("../repository/funcionarios.repository");




module.exports = {
    tudo: (req, res) => {
        funcionariosRepository
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
        funcionariosRepository
            .pegar_id(id)
            .then(result => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserir: (req, res) => {
        const funcionario = req.body;
        funcionariosRepository
            .inserir(funcionario)
            .then(() => {
                res.send({ msg: "inserido", funcionario, });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        funcionariosRepository
            .deletar(id)
            .then(() => {
                res.send({ msg: "deletado"});
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    atualizar: (req, res) => {
        const funcionario = req.body;
        const { id } = req.params;

        funcionariosRepository
            .atualizar(funcionario,id)
            .then(() => {
                res.send({ msg: "atualizada",
                funcionario,
            });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    BTDF: (req, res) => {
            funcionariosRepository
            .BTDF()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    BDF: (req, res) => {
        const {id} = req.params;

        funcionariosRepository
        .BDF(id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
},

};