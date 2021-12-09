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
   },

   findById: {
     async handler(ctx) {
       if(ctx.params && ctx.params.id) {
         return await repository.show(ctx.params.id)
        }
        throw "Id é obrigatório"
     }
   }
  }
}