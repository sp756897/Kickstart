const Web3 = require("web3")
let web3;

if(typeof window !== "undefined" && typeof window.ethereum !== "undefined")
{
   window.ethereum.send('eth_requestAccounts');
    web3 = new Web3(window.ethereum);

}

else{
    //We are on the server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/8c3f5ad109d148beb14a057c7b1132a6"
    );
    web3 = new Web3(provider);
    console.log("Wrong")
}

export default web3;