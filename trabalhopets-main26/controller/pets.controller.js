const petsRepository = require("../repository/pets.repository");
petsRouter = require("../routes/pets.router");

module.exports = {
    find_pet: async (req, res) => {
      const data = await petsRepository
        .find_pet()
        .then((result) => result)
        .catch((error) => {
          res.status(500).send(error);
        });
  
      res.render("pet", { data });
    },

    find_dono: async (req, res) => {
      const data = await petsRepository
        .find_dono()
        .then((result) => result)
        .catch((error) => {
          res.status(500).send(error);
        });
  console.log(data)
      res.render("dono", { data });
    },

    findPetsByDono: async (req, res) => {
      const { id } = req.params;
      const data = await petsRepository
        .findPetsByDono(id)
        .then((result) => result)
        .catch((error) => {
          res.status(500).send(error);
        });
      res.render("dono_dog", {data});
    },
    perereca: async (req, res) => {
      const { id } = req.params;
      const senta = await petsRepository
      .senta(id)
      .then((result) => result)
      .catch((error) => {
        res.status(500).send(error);
      });
      const ne_mim = await petsRepository
        .ne_mim(id)
        .then((result) => result)
        .catch((error) => {
          res.status(500).send(error);
        });
      res.render("dono_dog", {senta,ne_mim});
    },
    salada_de_fruta: async (req, res) => {
      const { id } = req.params;
      const o_james = await petsRepository
      .o_james(id)
      .then((result) => result)
      .catch((error) => {
        res.status(500).send(error);
      });
      const eu_quero_uma = await petsRepository
        .eu_quero_uma(id)
        .then((result) => result)
        .catch((error) => {
          res.status(500).send(error);
        });
      res.render("dog_donos", {o_james,eu_quero_uma});
    }
};