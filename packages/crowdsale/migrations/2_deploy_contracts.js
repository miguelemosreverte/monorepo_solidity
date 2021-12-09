

const CrowdSale = artifacts.require("CrowdSale");


module.exports = async function (deployer, network, accounts) {
    const initialAccount = accounts[0]
    const rate = 1; // 1 wei per token

    await deployer.deploy(CrowdSale, rate, initialAccount, "0x57018e8fd1b11654F9464918Ef5308E4d829a050");
    // TODO via web3 get contract allocated at X address
    //const tokenInstance = await FluwixToken.deployed();
    //await tokenInstance.transfer(FluwixTokenSale.address, await tokenInstance.totalSupply());
};
