const networkConfig = {
  4: {
    name: "rinkeby",
    vrfCoordinatorV2: "0x271682deb8c4e0901d1a1550ad2e64d568e69909", // from chainlink contract addresses
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
