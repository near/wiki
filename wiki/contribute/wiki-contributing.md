---
title: Contributing to This Wiki
description: A guide to contributing to the wiki.
sidebar_position: 2
slug: /contribute/wiki-contributing
---

---

Wiki content development is community driven, and your contributions are welcome!

NEAR uses [Docusaurus](https://docusaurus.io) for documentation. Please refer to their documentation for details on major structural contributions to the documentation.

For simple content changes you have 2 options

- [Submit an issue](https://github.com/near/wiki/issues)
- [Submit a pull request](https://github.com/near/wiki/pulls) _(we prefer PRs of course)_

## The Instant PR

This is the fastest way to submit content changes directly from the page where you notice a mistake.

1. Open any page in the docs on [wiki.near.org](https://wiki.near.org)
2. Click the `[ Github ]` button at the top right hand side of _every_ content page
3. Make your edits to the document that opens in GitHub by clicking the ✎ (pencil) icon
4. Submit a PR with your changes and comments for context

## The Typical PR

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

## How To Contribute

To contribute, you can use the Github repository: https://github.com/near/wiki.
You can start editing any file by clicking "Edit this page" on any page in the wiki (you will need to sign up for Github to make changes).

Once logged in, you will be in the editor. The editor allows you to edit "Markdown" files - a special formatting used for this Wiki.

When you are done with changes, you can describe what have you done in the text field at the bottom.
The next step is to create a Pull Request that will inform Wiki editors to review your changes.

For more information on how to use Github, please refer to [How to Contribute page](./how-to-contribute.md) of this section.

## Style Guide

To add images to a page in the wiki, start by adding an image to the folder under `website/static/images`.
Then you can include the image in a page by typing the following:

```md
![Alt text/description of the image](@site/static/img/image-name.png)
```
The above text is alt text inside a pair of `[]` that should explain what is in the image, followed by a pair of `()` that have a link to the image in the images folder.

If you create a new page, or would like to change the title of an existing page you can edit the frontmatter in a page.
You can find it at the top of every `.md` file, here's an example:

```md
---
description: A guide to contributing to the wiki.
title: Contributor Guide
---
```
This tells browsers and search engines what content is on a page, and what each page is called. 
Every page should have frontmatter, to make pages on the wiki easy to find and share.

If you want to link to a definition in the glossary, you can use a markdown link:
```md
[Word](./../getting-started/glossary.md)
```
In the above example, you put the word you're defining inside a pair of `[]`, then you link the glossary page inside `()` with a `#` followed by the specific word you're linking to.

### NEAR-Specific style

This section is for terminology directly related to NEAR:

- NEAR should always be capitalized

### General Style

- If a definition is in the glossary, link to it when you explain a detailed concept for the first time.
- When you use acronyms, define them the first time you use them in a page.
- In most cases, avoid future tense because it can be ambiguous.
- Headings should be title case.
- Add alt text to images so that screen readers can understand what is happening in a picture.
- Use active voice.
  Try to use active voice as often as possible, because passive voice can make a sentence ambiguous and hard to understand.
- Avoid listing future plans for a product or feature, in part because when a feature is implemented can be ambiguous, or the product may be cancelled before it ever releases.
- Use markdown (files ending in .md), and avoid using HTML snippets in markdown because HTML can make reading and editing documents in the wiki more complex.
- Be respectful.
  
For more information on style, please refer to [Style Guide page](style-guide.md) of this section.