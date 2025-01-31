const client = require('./client')
async function init() {
    // const result = await client.get('users:3');
    const result = await client.get("msg:6");

    console.log("Result ->> ",result);
}

init();