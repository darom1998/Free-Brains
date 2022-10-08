//SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

contract Bank {
    int256 public bal = 0;

    function deposite_money(int256 amt) public {
        bal += amt;
    }

    function withdraw(int256 amt) public {
        require(amt <= bal, "You don't have this amount of money");
        bal -= amt;
    }

    function getBalance() public view returns (int256) {
        return bal;
    }
}
