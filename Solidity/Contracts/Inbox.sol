pragma solidity ^0.4.17;

contract Inbox{

string public message;

function Inbox(string initmsg) public{
    message = initmsg;
}

function setMessage(string msg) public {
    message = msg;
}
}