const repository = require("../repository")

module.exports = {
  name: "rate-movie-service",
  version: 1,
  dependencies: [
    "v1.catalog-service"
  ],
  actions: {
   create: {
    async handler(ctx) {
      const idMovie = ctx.params.idMovie;
      const rate = ctx.params.rate;
      const idUser = ctx.params.idUser;

      const exists = await ctx.call("v1.catalogo-service.exists", {
        id: idMovie
      });

      if (!exists) {
        throw "O filme informado não existe!";
      }

      if (rate < 0 || rate > 5) {
        throw "A nota deve ser entre 0 e 5";
      }

      return Avaliacao.create({
        idMovie, rate, idUser
      });
    }
   },
  }
}