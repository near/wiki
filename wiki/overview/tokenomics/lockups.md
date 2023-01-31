---
description: Secure way to lock NEAR tokens for a period of time
title: Lockups
sidebar_position: 6
---

---


These docs include information about lockups in general, how they are implemented on NEAR, some challenges this causes, and how you can delegate your locked tokens.

## Lockup Basics

A "lockup" is when tokens are prevented from being transferred. The configuration of this lockup may vary significantly from case to case, but the same smart contract is used for each of them. Accounts that are subject to a lockup have a different setup than accounts that are created without a lockup. If you have a locked-up account, it may be supported slightly differently by various tools (from wallets to delegation interfaces) because of this difference in the architecture.\
If you want to be sure to see the correct balances, use [NEAR official wallet](https://wallet.near.org).

The most common configuration of lockup is to linearly release the tokens for transfer during the entire term of the lockup. For example, a 24-month linear lockup would make a small amount of tokens eligible for transfer with each block that passes until the full amount is free to transfer at the end of 24 months.

Another factor in lockups is the "cliff", which means that no tokens are unlocked until that date (often 12 months after the lockup start).\
On that date, a large chunk of tokens is unlocked at once to make it as if the cliff never existed at all.\
Most early accounts are subject to a cliff. For example, a 4-year linear lockup with a 1-year cliff will have the following characteristics:

1. Months 0-12: all tokens are locked
2. Month 12+1 block: the first 25% of the tokens are immediately unlocked
3. Months 13-48: the remaining 75% of tokens are unlocked smoothly over each block of the remaining 36 months.
4. Months 48+: all tokens are unlocked

_See how NEAR tokens have been distributed and what lockups generally apply in_ [_this post_](https://near.org/blog/near-token-supply-and-distribution/)_._

_See the FAQ at the end for questions_


A Lockup is a special smart contract that ensures that the full, or the partial amount is not transferable until it is supposed to be.

The lockups are implemented as a separate smart contract from your main account. Thus, if you have received tokens prior to [Phase II](https://near.org/blog/near-mainnet-phase-2-unrestricted-decentralized/), you will get two things:

1. A regular account (also called "Owner Account" in the context of lockups), let's say `user.near` or `3e52c197feb13fa457dddd102f6af299a5b63465e324784b22aaa7544a7d55fb`;
2. A lockup contract, with a name like `4336aba00d32a1b91d313c81e8544ea1fdc67284.lockup.near`.

 Have a look at the [Lockup page](https://github.com/near/core-contracts/tree/master/lockup) in the NEAR repo for a deeper dive into Lockups.


### Termination of Vesting

Vesting could be terminated by the foundation, an account configured at the moment of initializing the contract. It's important to understand how the termination works combining with the lockup schedule.

![](@site/static/img/lockup_5-ccc671d917b28deda1ddc51c2ef2f1d1.png)

At the moment of termination, we stop the vesting process, so the vested amount is going to remain constant after that; the lockup process keeps going and will unlock the tokens on its schedule. We continue to unlock the tokens by getting the minimum between unlocked and vested amounts.

### An Example

You can see examples of account and lockup setups in the [NEAR Explorer](https://explorer.mainnet.near.org).\
For example, this randomly chosen account `gio3gio.near` was created in several steps:

First, the Owner Account `gio3gio.near` was created and configured using several transactions, which you can see in [the account history](https://explorer.mainnet.near.org/accounts/gio3gio.near). It was created with 40 NEAR tokens to pay for the storage requirements of the account, and the two-factor authentication that is deployed to it.

Next, the account [9b84742f269952cea2877425b5e9d2e15cae8829.lockup.near](https://explorer.mainnet.near.org/accounts/9b84742f269952cea2877425b5e9d2e15cae8829.lockup.near) was created to store the actual balance of locked tokens on the account in [a batch transaction](https://explorer.mainnet.near.org/transactions/Eer14Fih17TRjpiF8PwWfVKNTB57vXnNJsDW93iqc2Ui) which also transferred these tokens to it (in this case, 594.11765 tokens).\
You can see the arguments for the `new` method in the explorer, which show a 12-month release duration with an initial cliff of October 4th:

For the actual lockup contract code and README, [see it on Github](https://github.com/near/core-contracts/tree/master/lockup).

```json
{
  "owner_account_id": "gio3gio.near",        // the Owner account who is allowed to call methods on this one
  "lockup_duration": "0",                    // not necessary if the lockup_timestamp is used
  "lockup_timestamp": "1601769600000000000", // Unix timestamp for October 4th, 2020 at midnight UTC
  "transfers_information": {
    "TransfersDisabled": {
      "transfer_poll_account_id": "transfer-vote.near"
    }
  },
  "vesting_schedule": null,
  "release_duration": "31536000000000000",  // 365 days
  "staking_pool_whitelist_account_id": "lockup-whitelist.near",
  "foundation_account_id": null
}
```

## Delegating Locked Tokens

One of the unique features of the NEAR lockups is the ability to delegate tokens while they are still locked.

There are a few things you need to know: 

1. You can only delegate to whitelisted pools, right now it's all the pools that end with `.poolv1.near`.&#x20;
2. One lockup contract can only delegate to a single pool.&#x20;
3. The account must keep a minimum balance of 3.5 $NEAR to cover storage for the lockup contract itself (transactions that will try to withdraw over that amount will just fail).&#x20;
4. Delegation rewards can be withdrawn back to the lockup contract but are unlocked, so they can be withdrawn from it right away.&#x20;
5. Delegating commands/tools which are not specifically configured to work with locked-up accounts won't work, as the "owner account" must call a lockup contract. 

## Frequently Asked Questions

### I don't see my full balance in my wallet

Not all wallets support looking up the locked-up balance.

There are three ways to go:

* Use the [NEAR official wallet](https://wallet.near.org);
* [Import your account into NEAR Wallet](token-custody.md#importing-accounts-from-other-wallets);
* Use CLI to check your balance: `near view <LOCKUP_ACCOUNT_ID> get_balance ''` (note it outputs the value in yoctoNEAR - divide by 10e24 to get NEAR amount).

### If I have a lockup, what do I need to do to transfer my tokens once they are available from the Wallet?

If you use NEAR Wallet, you can just transfer them as normal. You will just have to confirm a couple of extra transactions ("check vote" and "transfer").\
Other wallets may implement this differently.

> Got a question? [Ask it on StackOverflow!](https://stackoverflow.com/questions/tagged/nearprotocol)
