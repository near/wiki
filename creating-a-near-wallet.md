---
description: A step-by-step guide to creating your NEAR Wallet
---

# Creating a NEAR Wallet

The [NEAR Wallet](https://wallet.near.org) is a non-custodial, web-based wallet for the NEAR blockchain.&#x20;

To get started, go to https://wallet.near.org and click “Create Account”.&#x20;

### Creating an Account&#x20;

First, choose your account ID. Each account created in the NEAR Wallet is appended by .near, which is part of the account ID. For example, choosing `satoshi` will create the `satoshi.near` account name.

![](https://lh6.googleusercontent.com/D\_1JS6t0mFtjz\_K3Kb11crc\_D6a\_jDx2-TqbrKyuv5EAV\_6gk0YCP75VGcgDz7rdj\_H65623QNnFsmKB1m5oH6voJ\_MT4nc1YnyTjnfk0-Hab9eQlh7R3bMNAH3Zg9PGEDb2BToy)

### Choosing the Recovery Method&#x20;

Next, you will choose your account recovery method. The NEAR Wallet is entirely non-custodial, which means account access is your responsibility. We currently offer three methods of account access. After creating your account, you can choose to enable multiple methods.

![](https://lh5.googleusercontent.com/4JuCDrcKxm-q\_oMLpLxMvW1ggb3atv9RUknbiD53FpDkD-tJai-\_oMhQFUQunZbo11NfftKrWBW0MgFKLzWZnVxonV\_CGy-sPnB\_Tr6QctYRWZ1rzC8btVfs5m1W4rDITuDe6yht)

#### Ledger Hardware Wallet&#x20;

If you have a Ledger Nano S or X, we highly recommend using it! This ensures your private keys never leave your Ledger, which provides the highest level of security when using the NEAR Wallet.

![](https://lh6.googleusercontent.com/MZ6izOWbgsAU4-7ju3gdMVYTM8MCnG0OzCXfQSB7\_YUuScDByGg7uH0muOAVG2a-W1YUVxSqTGq674Jjl-ASWg3HWc-8NPALeQRAcW8CPsbm8MdmpNtxsX8pBugVM5GRg9eHNL9i)

#### Recovery (Seed) Phrase&#x20;

Write down a twelve seed word recovery phrase. If you do not have a Ledger, this is the next best option.&#x20;

**Important**: The seed phrase is only as secure as your storage of it! If you want to retain access to your account, you MUST write down your seed words in order, and store them securely. If you lose your seed words, you lose your account forever.

![](https://lh5.googleusercontent.com/BO4Sn5KsGD44sQOSPJ7RVDDX0SCUtgESOsDYHrvB0cetZe7YJVKUnOmd5jHUBHBsA13HdXXsSNWUN8AvTWJEK3bCu3w9-rlPgdRBRQnREkZcW06iGxG0MP6knjNPbDVymC8ArAaV)

#### Email&#x20;

This is the least secure option. We only recommend this option for smaller amounts, as the security depends on your email provider.&#x20;

We will send you a one-time email with a verification code and recovery link. We do not store this information, and thus you MUST keep this message safe in order to recover your account.&#x20;

**Important**: We send this message only once, so make sure to have a copy of the recovery link in a safe place. If you delete the recovery email or you lose access to the email account, you will not be able to recover your wallet

### Funding Your Account&#x20;

Next, you need to fund your account with NEAR.&#x20;

To do anything with the NEAR Wallet, you will need at least 0.1 NEAR. There are several ways to obtain NEAR, including from popular exchanges like Binance and Huobi.&#x20;

NEAR Wallet provides a simplified account creation process for users who provide a valid email address for the first time. In this case, you can directly top up your wallet using the account name without the temporary address passage below.&#x20;

If you don’t want to disclose your email address, or create a secondary account, transfer NEAR (minimum 0.1 NEAR) to the 64 character account ID (your temporary ID) shown when selecting 'Manual Deposit', then return to this page.

![](https://lh6.googleusercontent.com/rma6H-vcho-DAEe8vbTyuc2IWX-2t5ezdw4frxojivcI9zTFVRDGqYS9xiCK9m8L0ln6TrY4QK8XBfciOWI5OgfJZjXhIRqSmrPOtwBmPAMLgGwLe-Mql3sjmLnaW9zHRv9eilWF)

Until the funds are received, you will see “Awaiting deposit” in the account status.&#x20;

Once the funds are ready, click the button “Claim my Account”, and your account is ready to use! You will be redirected to your “Wallet” page and can view your accounts details.

![](https://lh5.googleusercontent.com/WdMC8JbDlcKmN6Jd7opFnu3BQw9j5RE\_HhGQ7fMtljZ6iR\_e5DN8Tp8SiJ0fEkFrCci\_Za6M-ReXDJJschLQqeGSH2LJCFb-JJcD5kozPEkPOw68o\_oddHrsSEyejMJAkD-qkjhj)

## Managing Your Account&#x20;

On the “Account” page, you will see a breakdown of your account balance, available recovery options (not including your seed phrase from the first step), and the option to add a Ledger hardware device or setup Two Factor Authentication.

![](https://lh3.googleusercontent.com/7y2eMCa2Z1qCLzIeSpFpdoD5bsJ4D2bVwuhdkZuPHCv2ADMheKCJODqaTW-1X5F\_4AkP6uZRmipk4l1TXOvgz-7BFJJh82i5WnRYdC\_BSeMaJMiA2LUnfs2C0zAhe5K1XC\_MrtzJ)

### Two Factor Authentication

&#x20;If you do not have a Ledger, we highly recommend enabling Two Factor Authentication.&#x20;

Two Factor Authentication in the NEAR Wallet deploys a multi-signature contract to your account, and requires all transactions to be confirmed by a second device.&#x20;

We currently offer Email based Two Factor Authentication.&#x20;

**Note**: If you set up Ledger, you will not see the 2FA screen. We will eventually offer support for Ledger to be used as one of the authentication methods, but that is currently not possible in the Wallet.&#x20;

**Important**: This feature requires additional tokens in your available balance to pay for the storage fees.
