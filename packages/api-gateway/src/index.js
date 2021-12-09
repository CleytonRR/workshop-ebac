const { ServiceBroker } = require("moleculer");

async function initBroker() {
  const broker = new ServiceBroker({
    transporter: "TCP",
    registry: {
      strategy: "Random"
    }
  });

  broker.loadServices("./src/services");

  broker.start().then(() => {
    broker.repl();
  });
}

initBroker()