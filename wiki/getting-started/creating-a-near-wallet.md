---
description: A step-by-step guide to creating your NEAR Wallet
title: Creating a NEAR Wallet
sidebar_position: 2
---

# Creating a NEAR Wallet
---

The first step in your NEAR journey is to create a NEAR Wallet. It is an empowering experience to remove the middleman from your financial transactions. You will be able to create your own account, send and receive tokens, and even create your own smart contracts.

[NEAR Wallet](https://wallet.near.org) is a non-custodial, web-based crypto wallet for the NEAR blockchain. This means that you are in control of your account and your private keys. Whoever has access to your private keys has access to your account. This is why it is important to keep your private keys safe.

To get started, go to https://wallet.near.org and click “Create Account”. The steps provided below are the same as the ones you will see in the NEAR Wallet.

### Creating an Account

First, choose your human-readable account ID. Each account created in the NEAR Wallet is appended by `.near`. For example, choosing `satoshi` will create the `satoshi.near` account name. This is similar to how google accounts end with `@gmail.com`. If you have used other blockchains like Ethereum this may seem different to the alphanumeric account IDs you are used to, but named accounts are standard on NEAR. 

:::note
If you want a deeper dive on this subject, check out the [Account Model](https://docs.near.org/concepts/basics/accounts/model) section of the NEAR docs.
:::

![Wallet](/images/wallet1.png)

### Choosing the Recovery Method

Next, you will choose your account recovery method. The NEAR Wallet is entirely non-custodial, which means account access is your responsibility. We currently offer three methods of account access. After creating your account, you can choose to enable a combination of methods.

![Wallet](/images/wallet2.png)

#### Ledger Hardware Wallet

If you have a hardware wallet like Ledger Nano S or X, we highly recommend using it. This ensures your private keys never leave your Ledger, which provides the highest level of security when using the NEAR Wallet. Check out [Ledger](https://www.ledger.com/) for more information.

![Wallet](/images/wallet3.png)

#### Recovery (Seed) Phrase

A seed phrase is the most common recovery method for blockchain account. It is a list of words in a particular order that is unique to your account. Write down the twelve seed word recovery phrase when prompted, and keep it safe! If you do not have a Ledger, this is the next best option.

:::important
The seed phrase is only as secure as your storage of it! If you want to retain access to your account, you MUST write down your seed words in the correct order, and store the phrase securely. If you lose your seed phrase, you lose access to your account forever.

:::

![Wallet](/images/wallet4.png)

#### Email

This is the least secure option. We only recommend this option for smaller amounts, as the security depends on your email provider.

We will send you a one-time email with a verification code and recovery link. We do not store this information, and thus you MUST keep this message safe in order to recover your account.

:::important

We send the email recovery message only once, so make sure to have a copy of the recovery link in a safe place. If you delete the recovery email or you lose access to the email account, you will not be able to recover your wallet

:::


### Funding Your Account

Next, you will need to fund your account with NEAR tokens.

To do anything with the NEAR Wallet, you will need at least 0.1 NEAR. There are several ways to obtain NEAR, including from popular exchanges like [Binance](https://www.binance.com/en) and [Huobi](https://www.huobi.com/en-us/).

NEAR Wallet provides a simplified account creation process for first-time users who provide a valid email address. In this case, you can directly top up your wallet using the account name without the temporary address passage below.

If you don’t want to disclose your email address, or create a secondary account, transfer NEAR (minimum 0.1 NEAR) to the 64 character account ID (your temporary / implicit ID) shown when selecting 'Manual Deposit', then return to this page.

![Wallet](/images/wallet5.png)

Until the funds are received, you will see “Awaiting deposit” in the account status.

Once the funds are ready, click the button “Claim my Account”, and your account is ready to use! You will be redirected to your “Wallet” page and can view your accounts details.

![Wallet](/images/wallet6.png)

## Managing Your Account

On the “Account” page, you will see a breakdown of your account balance, available recovery options (not including your seed phrase from the first step), and the option to add a Ledger hardware device or setup Two Factor Authentication.

![Wallet](/images/wallet7.png)

### Two Factor Authentication

If you do not have a Ledger, we highly recommend enabling Two Factor Authentication.

Two Factor Authentication in the NEAR Wallet deploys a multi-signature contract to your account, and requires all transactions to be confirmed by a second device.

We currently offer Email based Two Factor Authentication.

:::note
If you set up Ledger, you will not see the 2FA screen. We will eventually offer support for Ledger to be used as one of the authentication methods, but that is currently not possible in the Wallet.
:::

## NEARDROPS - Bring Your Friends!

Already a NEAR Ecosystem whiz, or have a group of friends who'd be interested in jumping into the world of Web3?

Give them the gift of decentralization, data ownership, and DeFi with a NEARDROP.

:::note link
[neardrop](./near-token/neardrop.md)
:::
