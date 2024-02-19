const starknet = require("starknet");
const ERC20 = require("../contracts/ERC20.json");

const eth_address =
  "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
const provider = new starknet.RpcProvider({
  nodeUrl: "http://localhost:9944",
});
const account = new starknet.Account(
  provider,
  "0x4",
  "0x00c1cf1490de1352865301bb8705143f3ef938f97fdf892f1090dcb5ac7bcd1d",
  "1",
);

async function balance(address) {
  const contract = new starknet.Contract(ERC20.abi, eth_address, provider);
 
  console.log(result);
 
  console.log("Getting balance of: " + address)
  const balance = await contract.balanceOf(address);
  console.log("Balance  is  :" + starknet.uint256.uint256ToBN(balance.balance).toString())
  let hash = await account.execute(result, undefined);

  console.log("Txn hash - ", hash);
}




balance(process.argv[2]);
