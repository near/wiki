---
title: Best Practices
description: Playbook for NEAR development at every stage 
sidebar_position: 2
---


## Pre-Development



* Understand NEAR Protocol: Get acquainted with the NEAR protocol by  reading the “[NEAR Whitepaper](https://near.org/papers/the-official-near-white-paper)” and to learn some key aspects such as Design principles, Economics and Technology used in the NEAR protocol. Something that's highly recommended to read are [Account model ](https://docs.near.org/concepts/basics/accounts/model), [Access keys](https://docs.near.org/concepts/basics/accounts/access-keys#full-access-keys), [Asynchronous by design](https://docs.near.org/concepts/basics/transactions/overview),  and [Sharding](https://near.org/papers/nightshade) to name a few. Familiarize yourself with the [NEAR Protocol documentation](https://docs.near.org/develop/welcome), the NEAR GitHub repository, and other resources such as NEAR University or the NEAR YouTube channel.
* Design [Smart Contracts](https://docs.near.org/develop/quickstart-guide): Plan your smart contracts in advance. Remember that smart contract updates can be complex on blockchain, so good initial design is crucial. Some source code examples can be found at this [Github repo](https://github.com/near/near-sdk-js/tree/develop/examples/src). Please visit this link to learn more about how to “[upgrade NEAR smart contracts](https://docs.near.org/tutorials/nfts/upgrade-contract)”.
* Select the Right Tools: NEAR provides Rust and Javascript for smart contract development. Choose based on your team's expertise and project requirements.

## Development Stage



* Use [Test Driven Development](https://docs.near.org/develop/testing/integration-test#test-driven-design) (TDD): NEAR provides tools like the simulation testing framework for Rust and as-pect for JS. TDD allows you to ensure your contract behaves as expected. Some code samples can be found at this [github repo](https://github.com/near/workspaces). 
* Utilize [NEAR SDKs](https://docs.near.org/sdk/welcome): NEAR SDKs offer handy utilities and abstractions for account management, contract interaction, transaction construction, and more.
* Ensure [Efficient Gas Usage](https://docs.near.org/concepts/basics/transactions/gas): Be mindful of computational and storage costs in smart contracts to ensure efficient usage of gas.
* [Optimizing contracts](https://docs.near.org/sdk/rust/contract-size) - Avoid the pitfalls of chunky (expensive) contracts which can also result in high gas fees. Please refer to the best practices for contract optimization. 

## Pre-Mainnet Deployment



* Code Review and Auditing: Have your smart contracts reviewed and audited by third parties to detect potential security vulnerabilities and inefficiencies.Please contact your account manager who can guide you with some of the preferred smart contract partners we have in the NEAR Ecosystem such as Hacken, Ottersec, Certik, Halborn, etc.
* Test on [NEAR Testnet](https://explorer.testnet.near.org/): [Deploy your contract to NEAR Testnet](https://docs.near.org/develop/deploy#deploying-the-contract) to verify that it operates correctly in a live network environment.
* Create a Rollout Plan: This should include contingency plans for any problems or bugs discovered after deployment.



## Building on BOS 



* [BOS overview video ](https://www.youtube.com/watch?v=NGX4_ZlzFzs)
* [Longer Technical Workshop](https://www.youtube.com/watch?v=Z3mVpZiy_gc&t=347s) (video)
* [Technical Workshop](https://docs.google.com/presentation/d/14DvgrjS5mElo1V9g0PQFYVDQnMFT55lF1yNOwCEsbnk/edit#slide=id.p) (slides)
* [Technical docs](https://docs.near.org/discovery/) (site)
* [Ecosystem projects on BOS](https://www.youtube.com/watch?v=ImKMvoD0W14)
* [EVM decentralized frontends on BOS](https://bos.gg/#/)
* [BOS telegram community channel](https://t.me/NEARisBOS)

## Maintenance and DevOps



* Monitoring: Set up [monitoring](https://docs.near.org/tools/realtime) for your contract. Explorers like [NEAR explorer](https://explorer.near.org/), [NEAR blocks](https://nearblocks.io/) and indexers like [near lake](https://docs.near.org/concepts/advanced/near-lake-framework) can help with this.
* [Updating Contracts](https://docs.near.org/develop/upgrade): Design your contracts to be upgradable or, alternatively, make sure you have a way to migrate state to a new contract if needed. There are two different ways to update your smart contracts:
    1. Through tools such as [NEAR CLI](https://docs.near.org/tools/near-cli) or [near-api-js](https://docs.near.org/tools/near-api-js/quick-reference) (requires the account's [full access key](https://docs.near.org/concepts/basics/accounts/access-keys)).
    2. Programmatically, by implementing a method that [takes the new code and deploys it](https://docs.near.org/develop/upgrade#programmatic-update).

## Community Resources 



* Community Engagement: Regularly communicate updates with your user base. This includes being active in [NEAR community](https://gov.near.org/) forums, hosting AMAs, etc. 
* Join NEAR community channels to stay up to date about NEAR:
    3. Technical docs - [https://docs.near.org/](https://docs.near.org/) 
    4. Github - [https://github.com/near](https://github.com/near) 
    5. Telegram - <span style="text-decoration:underline;"> [t.me/cryptonear](https://t.co/qwGrKk951Z)</span> 
    6. Community - [https://t.me/nearprotocolnews](https://t.me/nearprotocolnews) (announcements)  
    7. Discord - [near.chat](https://t.co/orPJHp4ZcC)<span style="text-decoration:underline;"> </span>
    8. Blockchain Operating System  -[ near.org](https://near.org/) 
    9. Twitter - [https://twitter.com/NEARProtocol](https://twitter.com/NEARProtocol) 
    10. Companies & projects building on NEAR - [NEAR Horizon](https://near.org/nearhorizon.near/widget/Index)

--- 

_Queries and suggestions ! email us [blockchain-success@near.foundation](mailto:blockchain-success@near.foundation)_
