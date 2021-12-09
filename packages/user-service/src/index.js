const {ServiceBroker} = require('moleculer')
const mongoose = require('mongoose')

async function initBroker() {

  await mongoose.connect("mongodb+srv://youruser:yourpassword@workshop-ebac.guvgv.mongodb.net/catalog?retryWrites=true&w=majority")
  const broker = new ServiceBroker({
    transporter: "TCP"
  })
  
  broker.loadServices("./src/services");
  
  broker.start().then(() => {
    broker.repl()
  })

}

initBroker()