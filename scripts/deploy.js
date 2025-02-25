const hre = require("hardhat");

async function main() {
  const fee = hre.ethers.parseUnits("0.01", 18);

  console.log("Deploying Factory contract...");

  // Get ContractFactory
  const Factory = await hre.ethers.getContractFactory("Factory");

  // Deploy contract with gas settings
  const factory = await Factory.deploy(fee, {
    gasPrice: hre.ethers.parseUnits("35", "gwei"), // 35 Gwei
  });

  await factory.waitForDeployment();

  console.log("Factory contract deployed at:", factory.target);
}

// Handle errors and execute deployment
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
