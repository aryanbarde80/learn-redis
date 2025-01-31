const { Redis } = require ("ioredis");
const client = new Redis();
module.exports = client;

// By default it hits 6379 pr redis ko . . .