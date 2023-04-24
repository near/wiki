---
title: Developer Enablement
description: Overview of the Development Platform on NEAR BOS
sidebar_position: 4
---

# Developer Enablement: The Developer Platform


## Highlights:



* The BOS development platform removes complexity enabling any developer interested in open-source and decentralization, to build, deploy, and host serverless backend services for web apps. 
* The BOS development platform creates an accessible entry point for BOS with a comprehensive set of tools and capabilities to get developers started quickly agnostic of underlying smart contract blockchain 


### What it is:

Developer enablement is responsible for the developer platform; A set of tools and capabilities that help remove the barriers around Web3 and make it possible for developers of all backgrounds to start building on the BOS. Created for every developer who values open-source and decentralization, the BOS offers developers a way to quickly build composable apps, build complete projects using current workflows, seamlessly onboard users, get feedback from real users, and increase discoverability. The development platform allows anyone with coding experience to start building on the BOS from day one, providing a more accessible space for Web3 development.  


### Why it matters:

The current Web3 space can feel like a walled garden, with access being limited to those already in the know. Getting up to speed on blockchain development can feel intimidating, complex, and time-consuming, particularly for people who are new to the field, but also for those trying to move between projects or chains. This complexity keeps many developers from working in the space, limiting the development of new apps and experiences and the overall adoption of Web3.

By providing a full suite of easy-to-use development tools and capabilities, including the ability to build full projects in Javascript, the developer platform solution helps overcome these challenges. Developers can compose applications with confidence using community-generated and validated components, as well as build their own reputations by publishing their own components and applications. They can also build complete projects locally using their current workflows with the VS Code extension, and seamlessly deliver projects using decentralized front-ends with low fees and transparent policies. Both NEAR and Ethereum blockchains are supported. 


### Who it’s for:



* Component developers - Anyone interested in building reusable components that can be shared with other developers and facilitate the growth of an open web can get started creating from day one.
* Application developers -  Developers, and anyone curious about Web3 who has some coding experience, can quickly build applications by remixing components for specific use cases and unique audiences. 


### How it works:



* Developer Workflow
    * Discover a component via search, understand the component from the component details, fork the component, remix and modify the component in the sandbox, and save and publish the component on-chain to the community. 
* Components
    * Built by developers for other developers or end users, components can range in size from a tiny button all the way to large applications composed of many other components that solve a detailed end-user use case. Components are stored on the NEAR blockchain and written using JSX (JavaScript with ReactJS).
* Viewer
    * Responsible for the UI (the gateway) which exposes the ability to log in, build, and interact with components. Including injecting into components the needed RPC libraries (e.g Pagoda or ETH RPCs).
* VM 
    * This enables developers with modules, functions, pure javascript, and select javascript APIs.
* Gateways
    * A specific implementation of the virtual machine for building an application that requires functionality not currently supported by the near.org VM & viewer. In order to deliver their specific use case, they can fork or reference the VM/Viewer, make changes, and serve their own gateway at their own URL. Current Gateways include bos.gg, near.org, near.social, and cantopia.pages.dev
* Sandbox
    * The in-browser IDE where a developer builds, modifies, saves, and publishes their components, allowing for a quick time to delight for new developers looking to decentralize front ends and remix components.
* Cross-Chain Ethereum Support
    * Read and write to Ethereum smart contracts from a decentralized front-end running on the BOS using ethers.js. Using remote NEAR accounts, developers can use their existing funded Ethereum accounts to deploy components.  


### What’s coming next



* Design system (component library, frontend development stack, documentation, and pattern library) 
* Reputation, badges, and rewards