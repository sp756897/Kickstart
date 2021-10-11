const path = require("path");
const fs = require("fs");
const solc = require("solc");

const filePath = path.resolve(__dirname, "Contracts", "Lottery.sol");
const source = fs.readFileSync(filePath,"utf8");

module.exports = solc.compile(source,1).contracts[":Lottery"];