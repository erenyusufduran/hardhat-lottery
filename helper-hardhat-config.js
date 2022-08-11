const { ethers } = require("hardhat");

const networkConfig = {
  4: {
    name: "rinkeby",
    vrfCoordinatorV2: "0x271682deb8c4e0901d1a1550ad2e64d568e69909", // from chainlink contract addresses
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    subscriptionId: "10392",
    callbackGasLimit: "500000",
    interval: "30",
  },
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    callbackGasLimit: "500000",
    interval: "30",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
