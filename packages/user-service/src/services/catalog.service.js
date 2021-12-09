const repository = require("../repository")

module.exports = {
  name: "user-service",
  version: 1,
  actions: {
   create: {
    async handler(ctx) {
      if(!ctx.params) {
        throw "CPF e name são obrigatórios"
      }

      const {name, cpf} = ctx.params

      if(!name || !cpf) {
        throw "CPF e name são obrigatórios"
      }

      const existsUserByCpf = await repository.show({cpf})

      if(existsUserByCpf) {
        throw "CPF é um campo único"
      }

      return repository.create({
        name, cpf
      });
    }
   },

   findById: {
    async handler(ctx) {
      if(!ctx.params) {
        throw "Id é obrigatório"
      }

      const {id} = ctx.params

      if(!id) {
        throw "Id é obrigatório"        
      }

      return await repository.findById(ctx.params.id)
    }
   },
  }
}