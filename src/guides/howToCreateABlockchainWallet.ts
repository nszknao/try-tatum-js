// 公式HPのGUIDESの実装
// https://docs.tatum.io/guides/blockchain

import {
  generateWallet,
  generateAddressFromXPub,
  generatePrivateKeyFromMnemonic,
  sendTransaction,
  Currency,
} from "@tatumio/tatum";

const main = async () => {
  // Creating a blockchain wallet
  const wallet = await generateWallet(Currency.BTC, true);
  console.log(wallet);

  // Generating an address from the wallet
  // const address = generateAddressFromXPub(Currency.BTC, true, wallet.xpub, 1);

  // const privateKey = await generatePrivateKeyFromMnemonic(
  //   Currency.BTC,
  //   true,
  //   wallet.mnemonic,
  //   1
  // );

  // =====

  // Sending an Ethereum transaction
  // const txHash = await sendTransaction(true, Currency.ETH, {
  //   to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
  //   currency: Currency.ETH,
  //   amount: "0.01",
  //   fromPrivateKey: privateKey,
  // });
  // console.log(txHash);
};

main();
