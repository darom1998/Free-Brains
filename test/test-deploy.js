// () => is a anonymous funtion
const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
describe("Bank", () => {
    let Bank, bank
    beforeEach(async function () {
        bank_factory = await ethers.getContractFactory("Bank")
        bank = await bank_factory.deploy()
    })
    it("it should start with balance of 0", async function () {
        // There is two key words from Chai package ASSERT and EXPECT
        const currentBal = await bank.getBalance()
        const expectedBal = "0"
        assert.equal(currentBal.toString(), expectedBal)
    })

    it("it should deposite balance of 90", async function () {
        // There is two key words from Chai package ASSERT and EXPECT
        const expectedBal = "90"
        const dep = await bank.deposite_money(expectedBal)
        await dep.wait(1)
        const currentBal = await bank.getBalance()
        assert.equal(currentBal.toString(), expectedBal)
    })

})