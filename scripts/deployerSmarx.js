const hre = require("hardhat");

async function main(){
  const deployerSmarxFactory = await hre.ethers.getContractFactory("Deployer");
  deployerSmarxContract = await deployerSmarxFactory.deploy();
  await deployerSmarxContract.deployed();
  
  console.log(`CONTRATO DEPLOYADO EN ADDRESS: ${deployerSmarxContract.address}`);
  // const SALT_CERO = ethers.utils.hexZeroPad(ethers.utils.hexlify(0), 32); 

  // //Ahora se deploya el SmarxContract
  // let txDeploy = await deployerSmarxContract.deployDeSmarx(SALT_CERO);

  // await txDeploy.wait();

  // console.log(await deployerSmarxContract.addressDondeDeployo());

  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
