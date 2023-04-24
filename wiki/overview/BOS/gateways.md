---
title: Gateways
description: Overview of NEAR BOS Gateways and how they work
sidebar_position: 9
---


# Gateways


## Highlights



* Access points for web 3 apps that allow developers to quickly add, and easily maintain, new experiences and functionality to their apps.
* It adds more value for end-users, simplifies development, and provides developers more entry points for their apps, increasing discoverability. 


### What it is:

Gateways are access points to web 3 apps that pull front-end code directly from the NEAR blockchain and render it for their users. Gateways can assume a variety of forms including wallets, portfolio management tools, and popular single use applications (e.g. SWEAT) that want to add additional functionality. The functionality available through gateways ranges from simple tasks like adding swap functionality, all the way to creating a decentralized app store, and offering bespoke experiences. This is all available by simply adding a JS library and choosing which app front-ends you want included.


### Why it matters:

Web3’s decentralization has often translated into a complex environment where developers have a difficult time building and getting their apps discovered, and where users often need to switch between countless platforms to discover apps and experiences. Gateways help to overcome this by making it possible to meet users where they already are, while providing a broader range of apps and experiences. This brings more value to existing users, and makes it easier for new users to discover what’s available.

Gateways make adding and maintaining new functionality and experiences for users simple by removing the complexity of every developer having to create and maintain everything themselves. Additionally, gateways also help developers overcome issues of discoverability by gaining more entry points for their apps. Developers can simply deploy once and make their app available across every gateway that has chosen to deploy it.


### Who it’s for:



* End-user applications - Gateways simplify the process of adding new integrations and experiences, bringing more value to users, while simultaneously decreasing complexity and making apps easier to maintain.
* Developers - By having an app directly integrated into gateways, developers gain more entry points for users to discover  and engage with their apps, removing a major part of the challenge posed by decentralized development.
* Users - Accessibility is an important element in making web3 truly available for users. They are something anyone can deploy, much like a website, lowering the threshold for participation, and they make discovering and using web3 apps and experiences easier.


### How it works:

There are two aspects to the BOS: 



* The gateway 
    * Developers run a specialized VM that can render JS components in the browser to users as UIs. 
    * When a user wants to use an app, a view function is called on the NEAR Blockchain, the code is retrieved from the blockchain for the app they want to rendered, and it is then rendered via the VM.

<!-- &lt; diagram > -->



* Components - 
  * JS, HTML,  CSS are stored on the NEAR blockchain and can be rendered by the VM into UIs to users. 
  * Components are composable and can be broken down into things as simple as buttons (single features), then composed into full applications. 
  * Components can even be groups of applications, (e.g. an Ecosystem section for Aurora, that can let users directly interact with several Aurora apps on a single page, or discover/use on one gateway).

<!-- &lt; diagram > -->


### What’s coming next:



* Expanding the chains that gateways support
* Making it even easier to implement the VM
* Showcasing what gateways are capable of through partnerships 