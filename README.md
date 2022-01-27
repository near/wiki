<br />
<br />

<p align="center">
<img src="website/static/assets/near-img.png" width="600">
</p>

<br />
<br />

## NEAR Protocol - scalable and usable blockchain

[![Discord](https://img.shields.io/discord/490367152054992913.svg)](http://near.chat)
[![CI](https://github.com/near/wiki/actions/workflows/build.yml/badge.svg)](https://github.com/near/wiki/actions/workflows/build.yml)

* ⚖️ NEAR Protocol is a new smart-contract platform that delivers scalability and usability.
* 🛠 Through sharding, it will linearly scale with the number of validation nodes on the network.
* 🗝 Leveraging WebAssembly (via Rust and AssemblyScript), more sane contract management, ephemeral accounts and many other advancements, NEAR
finally makes using a blockchain protocol easy for both developers and consumers.

## Quick start

Check out the following links

- Deployed, live Wiki: https://wiki.near.org
- Example applications: https://near.dev
- Community chat: https://near.chat

## Contributing

NEAR uses [Docusaurus](https://docusaurus.io) for documentation.  Please refer to their documentation for details on major structural contributions to the documentation.

For simple content changes you have 2 options

- [Submit an issue](https://github.com/near/wiki/issues)
- [Submit a pull request](https://github.com/near/wiki/pulls) *(we prefer PRs of course)*

### The instant PR

This is the fastest way to submit content changes directly from the page where you notice a mistake.

1. Open any page in the docs on https://wiki.near.org
2. Click the `[ Edit ]` button at the top right hand side of _every_ content page
3. Make your edits to the document that opens in GitHub by clicking the ✎ (pencil) icon
4. Submit a PR with your changes and comments for context

### The typical PR

This is the standard fork-branch-commit workflow for submitting pull requests to open source repositories

1. Fork this repo to your own GitHub account (or just clone it directly if you are currently a member of NEAR)

2. Open your editor to the _top level repo folder_ to view the directory structure as seen below

3. Move into the `/website` folder where you will run the following commands:

   - Make sure all the dependencies for the website are installed:

     ```sh
     # Install dependencies
     yarn
     ```

   - Run the local docs development server

      ```sh
      # Start the site
      yarn start
      ```

      _Expected Output_

      ```sh
      # Website with live reload is started
      Docusaurus server started on port 3000
      ```

      The website for docs will open your browser locally to port `3000` 

4. Make changes to the docs

5. Observe those changes reflected in the local docs

6. Submit a pull request with your changes
