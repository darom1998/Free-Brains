//SPDX-License-Identifier: MIT

pragma solidity 0.8.8;


contract FreeTalks {
  string public opinion;

  function sayOpinion(string memory _opinion) public {
    opinion = _opinion;
  }

  function publishOpinion() public view returns (string memory) {
    return opinion;
  }
}
