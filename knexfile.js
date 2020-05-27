// const credentials = require("./config/dbcredentials");
const knexSnakeCaseMapper = require("objection").knexSnakeCaseMappers;

// module.exports = {
//   development: {
//     client: "mysql",
//     connection: {
//       host: "pqxt96p7ysz6rn1f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//       database: "jwfpzfz7zbu3zy2b",
//       user: "c1rsbutdqmetw7zx",
//       password: "mv880478nmm1tgks",
//     },
//   },
//   ...knexSnakeCaseMapper(),
// };

//b30be2118083eb:f2ec8f0c@us-cdbr-east-05.cleardb.net/heroku_79d233133b30093?reconnect=true

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-05.cleardb.net",
      database: "heroku_79d233133b30093",
      user: "b30be2118083eb",
      password: "f2ec8f0c",
    },

    // migrations: {
    //   tableName: "migrations",
    // },
    // ssl: true,
    // debug: true,
    //  {
    //   host: "ekaterinagp.dk.mysql",
    //   database: "ekaterinagp_dkchemicals",
    //   user: "ekaterinagp_dkchemicals",
    //   password: "123456",
    // },
  },
  ...knexSnakeCaseMapper(),
};
