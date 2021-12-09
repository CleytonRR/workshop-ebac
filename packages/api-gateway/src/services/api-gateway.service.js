const ApiService = require("moleculer-web");

module.exports = {
  name: "api-gateway",
  version: 1,
  mixins: [ApiService],
  settings: {
    routes: [
      {
        path: "/api",
        aliases: {
          "POST /catalogo": "v1.catalog-service.create",
          "GET /catalogo": "v1.catalog-service.listAll",
          "POST /avaliacao/:idFilme": "v1.rate-movie-service.create",
          "POST /assinantes": "v1.user-service.create",

        }
      }
    ]
  }
}