var ethers = require('ethers');

const wallet = ethers.Wallet.createRandom();
console.log("private key: " + wallet.privateKey);
console.log("address: " + wallet.address);
