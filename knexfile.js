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
//b650e602d97609:fbba058c@us-cdbr-east-05.cleardb.net/heroku_abc599144908cf4?reconnect=true

mysql: module.exports = {
  development: {
    client: "mysql",
    connection:
      "mysql://b650e602d97609:fbba058c@us-cdbr-east-05.cleardb.net/heroku_abc599144908cf4?reconnect=true",
    //  {
    //   host: "ekaterinagp.dk.mysql",
    //   database: "ekaterinagp_dkchemicals",
    //   user: "ekaterinagp_dkchemicals",
    //   password: "123456",
    // },
  },
  ...knexSnakeCaseMapper(),
};
