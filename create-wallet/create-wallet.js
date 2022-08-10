const ethers = require("ethers");
const wallet = ethers.Wallet.createRandom();
console.log("!!! Use only for testing !!!\n");
console.log("Address:", wallet.address);
console.log("Mnemonic:", wallet.mnemonic.phrase);
console.log("PrivateKey:", wallet.privateKey);
