---
description: A guide to using the Rainbow Bridge.
title: Rainbow Bridge
sidebar_position: 7
---

---

If you have existing assets on Ethereum, it's possible to transfer them to NEAR and vice-versa.
The Rainbow Bridge allows you to move ERC-20 assets between Ethereum, Aurora and NEAR.
The bridge was built by Aurora, the Ethereum-compatible scaling solution built on NEAR.

To use the Rainbow Bridge, you will need to create a [NEAR wallet](./../creating-a-near-wallet.md), and you will need to install MetaMask.

## How Much Does it Cost?

Transfers between NEAR and Aurora happen instantaneously and require a single transaction.
Similarly, transfers from Ethereum to NEAR or Aurora only require a single transaction, they take approximately 10 minutes and the cost will be estimated by MetaMask.

Transfers to Ethereum, from NEAR or Aurora require two transactions. These transactions are the kickoff, from the network you start with and the finalization Ethereum.
The finalization can take up to 16 hours, and the cost is determined by the Ethereum gas price which makes them hard to predict.

Once a transaction begins, it cannot be cancelled, but you don't have to start the finalization transaction immediately.
If the gas prices are too high, you can wait until they drop to a manageable price before beginning the finalization transaction.

## Using The Rainbow Bridge

Start by connecting MetaMask, and your NEAR wallet so that you can make transfers between the NEAR network and other networks. In the example below we'll transfer NEAR to Aurora.

![Connect your wallets](@site/static/img/rainbowbridge1.png)

Next you need to choose the token you're transferring, and the amount you'll transfer. In the example below we're transferring 1 NEAR to Aurora.

![Enter your transfer details](@site/static/img/rainbowbridge2.png)

Now, you need to confirm your transaction.

![Confirm transfer](@site/static/img/rainbowbridge3.png)

Finally, if the transfer details are accurate and you're satisfied with the fee, click the "Approve" button.

![Approve transfer](@site/static/img/rainbowbridge4.png)

**Note:** Depending on the direction of your bridge transactions, you may be requested to confirm additional transactions in MetaMask and/or NEAR Wallet.
