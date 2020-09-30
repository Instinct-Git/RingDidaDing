const RingDidaDingClient = require('./Structures/RingDidaDing');
const config = require('../config.json');

const client = new RingDidaDingClient(config);
client.start();
