const hre = require("hardhat");

async function main() {
  const energyTrading = await hre.ethers.deployContract("EnergyTrading");
  await energyTrading.waitForDeployment();

  console.log(
    `EnergyTrading contract deployed at address : ${energyTrading.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
