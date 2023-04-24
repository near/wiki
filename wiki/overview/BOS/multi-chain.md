---
title: Mutli-Chain
description: Overview of how any chain can deploy a front-end on NEAR BOS
sidebar_position: 12
---

# ETH &lt;&gt; NEAR: BOS as an Ethereum Developer 




## Ethereum on BOS: An Overview

The Blockchain Operating System (BOS) is a cutting-edge protocol for designing and deploying decentralized front-ends on the blockchain. BOS aims to transform the development and user experience of decentralized applications (dApps) with its multi-chain capabilities, supporting both NEAR and Ethereum blockchains.

This means application developers can seamlessly build and connect their dApps to smart contracts on either blockchain, enhancing their Ethereum applications with BOS's decentralized capabilities using NETH remote accounts and popular Ethereum libraries like ethers.js.

### Create Decentralized Front-ends and Sign Transactions with Ethereum MetaMask Wallet

Ethereum developers can leverage their existing Ethereum accounts and MetaMask wallets to establish remote NEAR accounts using NETH. NETH serves as a bridge contract connecting existing Ethereum accounts to new NEAR accounts, enabling developers to sign NEAR transactions with MetaMask wallets.

To publish your component, simply log in to your MetaMask account using the wallet selector and sign the transaction.

### Interact with Ethereum Contracts via ethers.js Integration

The BOS Virtual Machine is compatible with the ethers.js library, allowing developers to execute read-only and state-changing calls from their components, just as they would in any JavaScript application.

Explore the [Lido example](https://docs.near.org/discovery/tutorial/lido), which employs the ethers.js library.
