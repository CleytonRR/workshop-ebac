const repository = require("../repository")

module.exports = {
  name: "catalog-service",
  version: 1,

  actions: {
   create: {
     async handler(ctx) {
       const {name, sinopse} = ctx.params

       if(!name || !sinopse) {
         throw "Name e sinopse são obrigatórios"
       }

       repository.create({name, sinopse})
     }
   },

   listAll: {
     async handler() {
       const allMovies = await repository.list()

       return allMovies
     }
   }
  }
}