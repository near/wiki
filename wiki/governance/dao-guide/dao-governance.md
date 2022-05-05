---
description: This is a guide to DAO Governance with Astro on NEAR.
title: DAO Governance
---
Before we discuss DAO governance, it might be beneficial if you either join a DAO, or [launch one](./how-to-launch-a-dao.md).

This guide covers the different features available to DAOs built with Astro on NEAR, including voting, custom tokens, NFTs, and other exciting features.

## Voting Tokens (Creation)

On the overview of your page you can begin the process of creating a voting token by hitting ‘Create a token for voting’.

1. On the ‘Enable voting by token’ page, hit ‘start’
   * **Note:** Once a DAO adopts a token for voting, that token cannot be changed
2. Select an option from the three displayed:
   1. Create a new token
      * A new token will be created on the NEAR blockchain for voting purposes
   2. Adopt a Token Farm token
      * Utilize a pre-existing token - anyone who owns this token can stake it and use it to vote within the DAO
   3. Adopt the NEAR native token
      * Anyone who holds NEAR will be able to vote within the DAO

![Astro DAO](/images/astrodao4.png)

### Creating a New Token

If you’re creating a new token for governance within your DAO then you’ll need to fill out the details:

1. Select ‘Create a new token’
2. Enter the details of your voting token:
   1. Token name
   2. Token symbol
      * This is the token ticker, e.g. NEAR = NEAR Token
   3. Total supply of the token
   4. Upload an image for your token icon
   5. Enter the account for where the tokens will be sent to
      * This will typically be your DAO account
3. Hit ‘Next’ and confirm the details and you’re all set

The DAO can then distribute voting tokens to members accordingly after the creation of the token.

![Astro DAO](/images/astrodao5.png)

### Adopting a Token Farm Token

1. Select ‘Adopt a Token Farm token’
2. Select the token from the drop-down list
3. Hit ‘Next’ and confirm the details
4. Select ‘Propose’ on the final screen

Note: Once you’ve selected a token for governance, this cannot be changed&#x20;

![Astro DAO](/images/astrodao6.png)

### Adopting the NEAR Native Token

1. Hit ‘Adopt the NEAR native token’
2. Select ‘Propose’

Anyone with NEAR will be able to vote for proposals within this DAO.

![Astro DAO](/images/astrodao7.png)

## Tasks

Astro is endowed with considerable flexibility within the interface itself. DAOs can create bounties, host polls, and  interact with the NEAR ecosystem directly through function calls under the ‘Plugins’ section

### Bounties

DAOs are able to post bounties which are, in essence, projects, tasks, and other pieces of work the DAO wants to complete. Each bounty will come with a specified reward which, upon successful completion of the bounty, will be received by the claimant.&#x20;

Bounties can range in complexity and length from meme/content creation to the refactoring of code repositories.

![Astro DAO](/images/astrodao8.png)

### Creating a Bounty

DAOs looking to post bounties to the wider NEAR Community can do so in a few clicks:

1. In the Bounties section of Astro hit ‘Create new bounty’
2. Select the token type which the reward will consist of and the amount
3. Enter the details of the bounty
4. Add an external URL link&#x20;
   * This can be a link to the NEAR Governance Forum or somewhere which delivers more details on the bounty
5. Select the number of times the bounty can be claimed
6. Enter the amount of time from claiming the bounty to completion
7. Hit ‘Propose’

![Astro DAO](/images/astrodao9.png)

### Claiming a Bounty

Completing bounties can be a rewarding endeavor that contributes to the growth of the NEAR Ecosystem and the growth of DAOs.

If you’re a contributor, artist, or meme-master then there may well be a bounty out there for you to hunt.&#x20;

When you’ve found a bounty you’d like to take onboard you can claim it and get started right away:

1. Identify the Bounty you’d like to take on board in the Bounties section of the DAOs Astro page
2. Hit ‘Claim’
3. Make sure you’ve understood the requirements of the bounty and if you’re happy to take on the task to earn the reward hit ‘Claim’ and pay the bond
   * **Note:** If you fail to complete the bounty or your submission is rejected then you will lose your bond and it will be sent to the DAOs treasury
4. Good luck, and happy bounty hunting!

![Astro DAO](/images/astrodao10.png)

You can un**-**claim a bounty within 2 days of claiming it in order to retrieve your bond. This is done through the same Bounties interface of Astro.

Once your bounty is complete head back to the bounty which you claimed in Astro and hit ‘Complete bounty’. Fill in the details, including your payment address and the completed bounty, and hit ‘Propose’. This will then be sent to the DAO for review. If the bounty has been satisfied, the DAO will distribute funds to your specified payout address.

### Polls

Polls are a simple way to gauge the opinions of the members of your DAO. You can ask any question and invite members to vote with a simply yes or no. Creating a poll is easy:

![Astro DAO](/images/astrodao11.png)

1. Head to the Polls section of Astro in your DAO
2. Click ‘Create new poll’
3. Enter the question or statement to vote on
4. Add an external URL if applicable
5. Hit ‘Propose’

![Astro DAO](/images/astrodao12.png)

All done. Your poll is live!

To participate in a poll simply select the poll and hit the green thumbs up or red thumbs down depending on which way you want to vote.

### Plugins

The plugins section allows for NEAR function calls which enable your DAO to interact with applications in the NEAR ecosystem. This functionality is only restricted by the breadth of function calls on NEAR. Essentially, the DAO can interact with any other dApp just as a user would.

![Astro DAO](/images/astrodao13.png)

![Astro DAO](/images/astrodao14.png)

## Treasury

DAOs built on Astro can retain a treasury of multiple assets, rather than being restricted to just NEAR. The treasury is divided into fungible tokens (tokens) and NFTs.

From the Treasury section of Astro, users can send tokens to create a new payment proposal and find more details on a particular token in the treasury.

The treasury balance is displayed in USD.

![Astro DAO](/images/astrodao15.png)

### Tokens

Here the balance of all fungible tokens is displayed. DAOs can ‘hold’ any NEP141 asset within the treasury.

### NFTs

Non fungible tokens are displayed in a gallery style and can be sent out in a similar manner to sending fungible tokens.

![Astro DAO](/images/astrodao16.png)

### Sending Tokens

Tokens can be sent by a DAO to those who may have requested funding or a grant.&#x20;

1. In the ‘Tokens’ section of Astro hit ‘Send tokens’
2. Fill out the details
   1. The type of token, and number of tokens, to be sent
   2. The address they’ll be sent to
   3. Details of the payout
   4. External URL if applicable
3. Hit ‘Propose’

This will create a proposal within Astro for governance participants to vote upon. If accepted, the funds will be sent to the specified payout address.

![Astro DAO](/images/astrodao17.png)

### Requesting Payouts

If you’re external to the DAO and wish to request funding you can do so:

Head to the DAO page on Astro

1. Hit ‘Create proposal’
2. Select ‘Request a payout'
3. Fill out the details&#x20;
   1. The type of token, and number of tokens, to be sent
   2. The address they’ll be sent to
   3. Details of the payout
   4. External URL if applicable
4. Hit ‘Propose’

Governance participants will be invited to vote on the payout request. If approved, funds will be sent to the specified payout address. The bond will be returned to the proposer unless the proposal is marked as spam.

## Groups

Within Astro, members of DAOs can be bundled into groups. With groups, DAOs have more flexibility in regards to governance due to the ability to restrict the voting on certain proposal types to members of specific groups. Additionally, groups serve as a way to clearly identify the roles of members within a DAO.

![Astro DAO](/images/astrodao18.png)

### How to Create a Group

1. Under the ‘Groups’ section of Astro hit ‘Add group’
2. Enter the details for your proposed group:
   1. Enter the group name
   2. Add at least one member using their NEAR Account
   3. Enter the details of the group
   4. Add an external URL link if applicable
3. Hit ‘Propose’

After the proposal is accepted the group will be created and members can be added and removed at the will of the DAO.

![Astro DAO](/images/astrodao19.png)

### Adding Group Members

1. Under the ‘Groups’ section of Astro select the Group you want to add a member to and hit ‘Add member to this group’
2. Enter the details
   1. Enter the group you wish to add members to
   2. Enter their NEAR account
   3. Add details to the proposal
   4. Include an external URL link if applicable
3. Hit ‘Propose’

If and when it’s approved by the DAO that member will be added to the specified group.

![Astro DAO](/images/astrodao20.png)

### Removing Group Members

1. Under the ‘Groups’ section of Astro select the Group you want to remove a member from
2. Hit the ‘-’ icon by the person logo in the top right of the user profile
3. Enter the details
   1. Enter the group you wish to remove a member from
   2. Enter their NEAR account
   3. Add details to the proposal
   4. Include an external URL link if applicable
4. Hit ‘Propose’

If and when it’s approved by the DAO that member will be removed from the specified group.

![Astro DAO](/images/astrodao21.png)

## Governance

The governance process sits at the core of a DAO and is exemplified within Astro. With a variety of governance methods, DAOs are empowered to leverage their community and members to achieve their goals in a transparent manner.

### DAO Settings

The setting section of your DAO in Astro includes details on:

![Astro DAO](/images/astrodao22.png)

* Name & Purpose of the DAO
* Links
* Bonds & Deadlines
* Flag

Each of these are set during the DAO creation process but, through governance, can be amended through the DAO Settings section.

### Voting policy

Here, Astro users can amend the voting policies for all aspects of the DAO. Proposals can be restricted to ensure that only members of the DAO who are in a certain group have voting rights.&#x20;

![Astro DAO](/images/astrodao23.png)

DAOs can amend

* Who can vote on proposals
* The bond required to submit proposals
* The threshold required for proposals to pass

Now that you know what you can _DAO_, go ahead and explore!
