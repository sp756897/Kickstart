const assert = require("assert")
const Web3 = require("web3")
const ganache = require("ganache-cli")
const web3 = new Web3(ganache.provider())
const {interface, bytecode} = require("../compile")

let lottery;
let accounts;

beforeEach(async()=>{
    accounts = await web3.eth.getAccounts();

    lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode})
    .send({gas:"1000000", from: accounts[0]});
});

describe("Lottery Contract",()=>{
    it("deploys a contract",()=>{
        assert.ok(lottery.options.address);
    });

    it("One person can enter",async ()=>{
        await lottery.methods.enter().send(
            {from: accounts[0],
             value:web3.utils.toWei("0.02","ether")});

        const players = await lottery.methods.allPlayers().call(
            {from:accounts[0]});

        assert.strictEqual(players[0],accounts[0]);
        assert.strictEqual(1,players.length);
    });

    it("Multiple person can enter",async ()=>{
        await lottery.methods.enter().send(
            {from: accounts[0],
             value:web3.utils.toWei("0.02","ether")});

        await lottery.methods.enter().send(
            {from: accounts[1],
             value:web3.utils.toWei("0.02","ether")});
        
        await lottery.methods.enter().send(
            {from: accounts[2],
             value:web3.utils.toWei("0.02","ether")});

        const players = await lottery.methods.allPlayers().call(
            {from:accounts[0]});

        assert.strictEqual(players[0],accounts[0]);
        assert.strictEqual(players[1],accounts[1]);
        assert.strictEqual(players[2],accounts[2]);
        assert.strictEqual(3,players.length);
    });
});
