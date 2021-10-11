const Hdwalletprovider = require("truffle-hdwallet-provider")
const Web3 = require("web3")
const {interface, bytecode} = require("./compile")

const provider = new Hdwalletprovider(
    "exhaust twin giant nice supreme recycle drastic curtain educate same hour switch",
    "https://rinkeby.infura.io/v3/8c3f5ad109d148beb14a057c7b1132a6"
);

const web3 = new Web3(provider);

const deploy = async ()=>{

    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to Deploy on "+accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:["Hi there!!!"]})
    .send({gas:"1000000",from:accounts[0]});

    console.log("Deployed on ", result.options.address);
};

deploy();