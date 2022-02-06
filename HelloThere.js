const Fetch = require("node-fetch");

async function HelloThere(options = {}) {
  
    const image = (`https://tenor.com/view/hello-there-hi-there-greetings-gif-9442662`);

    return image;
};


module.exports = {
    HelloThere
};