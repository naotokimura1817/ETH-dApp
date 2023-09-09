const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.provider.getBalance(deployer.address);

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const waveContract = await hre.ethers.deployContract("WavePortal", [], {
        value: hre.ethers.parseEther("0.001") // 0.1 ETHをWei単位に変換
    });
    await waveContract.waitForDeployment();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
    console.log("Contract deployed to: ", waveContract.target);
    console.log("Contract deployed by: ", deployer.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();