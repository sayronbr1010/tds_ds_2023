const con = require("../mysql-connection");
module.exports = {
    find_pet: () => {
        return con.select().from("pets");
    },
    find_dono: () => {
        return con.select().from("donos");
    },
    findPetsByDono: (id) => {
        return con.from('donos')
        .innerJoin('pets', 'donos.id', 'pets.dono_id').where("pets.dono_id",id);
    },
    findDonoByPets: (id) => {
        return con.from('pets')
        .innerJoin('donos', 'donos.id', 'pets.dono_id').where("dono.id",id);
    },
    senta: (id) => {
        return con.select().from("donos").where("id",id);
    },
    ne_mim: (id) => {
        return con.select().from("pets").where("dono_id",id);
    },
    o_james: (id) => {
        return con.select().from("donos").where("id",id);
    },eu_quero_uma : (id) => {
        return con.select().from("pets").where("dono_id",id);
    },
}