import knex from "knex";

const connectKnex = knex({
  client: "sqlite3",
  debug: true,
  useNullAsDefault: true,
  connection: {
    filename: "./m88.sqlite3",
  },
});

export default connectKnex;
