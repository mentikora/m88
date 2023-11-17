import connectKnex from "./knex.js";

async function all() {
  return connectKnex.select("*").from("projects");
}

function byId(id) {
  return connectKnex.select("*").from("projects").where("id", id).first();
}

export default { all, byId };
