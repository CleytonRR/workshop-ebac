const repository = require("../repository")

module.exports = {
  name: "rate-movie-service",
  version: 1,
  dependencies: [
    "v1.catalog-service",
    "v1.user-service"
  ],
  actions: {
   create: {
    async handler(ctx) {
      const idMovie = ctx.params.idMovie;
      const rate = ctx.params.rate;
      const idUser = ctx.params.idUser;

      const exists = await ctx.call("v1.catalog-service.findById", {
        id: idMovie
      });

      const existUser = await ctx.call("v1.user-service.findById", {
        id: idUser
      })

      if (!exists) {
        throw "O filme informado não existe!";
      }

      if (!existUser) {
        throw "Usuário não encontrado";        
      }


      return repository.create({
        idMovie, rate, idUser
      });
    }
   },
  }
}