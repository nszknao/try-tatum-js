import {
  generateAddressFromXPub,
  generateWallet,
  Currency,
} from "@tatumio/tatum";

const main = async () => {
  const btcWallet = await generateWallet(Currency.BTC, false);
  console.log(btcWallet);

  // xpub, tpubはそれぞれメインネット、テストネットの拡張公開鍵
  const btcAddress = generateAddressFromXPub(
    Currency.BTC,
    false,
    "tpubD6NzVbkrYhZ4WsMXiXFSfYkBoJxysBZv1PD79BPS72LTEiCfnf3Qenh5Z173CwfEdw5keu4GAAWum6J4mu1suKL3CWCBCnTB7NFMf3DjNfS",
    1
  );
  console.log(btcAddress);
};

main();
