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
  // const address = generateAddressFromXPub(
  //   Currency.BTC,
  //   true,
  //   "tpubDFXzrccHFPY1HxAxj5e1nd9M86bMYs6xYUop9uuSz33siQHNJZW7cT5wfNL2tbbmofRiQSmttQBUuyRHbYeA4rwBwGB9y5eEuuKjRmKihDd",
  //   1
  // );

  // const privateKey = await generatePrivateKeyFromMnemonic(
  //   Currency.BTC,
  //   true,
  //   "absent enlist fossil program replace minor snack domain very knee ripple gather purchase grace panther empty brisk daughter later indoor april useful rack erupt",
  //   1
  // );

  // =====

  // Sending an Ethereum transaction
  // const txHash = await sendTransaction(true, Currency.ETH, {
  //   to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
  //   currency: Currency.ETH,
  //   amount: "0.01",
  //   fromPrivateKey:
  //     "0xcd2fe348ecbde2a9b1caf0429dfaac4b656b9d969eca290cc106e6cbb38ef1e9",
  // });
  // console.log(txHash);
};

main();
