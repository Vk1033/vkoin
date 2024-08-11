import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Vkoin", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner] = await hre.ethers.getSigners();

    const Vkoin = await hre.ethers.getContractFactory("Vkoin");
    const vkoin = await Vkoin.deploy();

    return { vkoin, owner };
  }

  describe("Deployment", function () {
    it("Should mint 100 vkoins in owner's address", async function () {
      const { vkoin, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await vkoin.balanceOf(owner.address)).to.equal(hre.ethers.parseEther("100"));
    });
  });
});
