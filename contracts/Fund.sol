//SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

contract Fund {
  uint256 amount;
  struct Funders {
    uint256 amount;
    string name;
  }

  Funders[] public funders;
  mapping(string => uint256) nameToAmount;

  function addFunder(string memory _name, uint256 _amount) public {
    funders.push(Funders(_amount, _name));
    nameToAmount[_name] += _amount;
  }

  function withdraw(string memory _name, uint256 _amount) public {
    nameToAmount[_name] -= _amount;
  }

  function getTotal(string memory _name) public view returns (uint256) {
    return nameToAmount[_name];
  }
}
