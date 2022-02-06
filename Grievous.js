const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Grievous(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://tenor.com/search/general-grievous-gifs${random}.gif`);

    return image;
};


module.exports = {
    Grievous
};