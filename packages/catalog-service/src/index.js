const {ServiceBroker} = require('moleculer')

async function initBroker() {
  const broker = new ServiceBroker({
    transporter: "TCP"
  })
  
  broker.loadServices("./src/services");
  
  broker.start().then(() => {
    broker.repl()
  })

}

initBroker()