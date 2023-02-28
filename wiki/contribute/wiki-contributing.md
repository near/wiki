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

- [Edit this page](#the-instant-pr)
- [Create an issue and PR](#the-typical-pr) _(Please create your branch from the issue you created)_

## How To Contribute

To contribute, you can use the Github repository: https://github.com/near/wiki.
You can start editing any file by clicking "Edit this page" on any page in the wiki (you will need to sign up for Github to make changes).

Once logged in, you will be in the editor. The editor allows you to edit "Markdown" files - a special formatting used for this Wiki.

When you are done with changes, you can describe what have you done in the text field at the bottom.

The next step is to create a Pull Request (PR) that will inform Wiki editors to review your changes.


## The Instant PR

This is the fastest way to submit content changes directly from the page where you notice a mistake.

1. Open any page in on this [wiki](https://wiki.near.org)

2. Click the `[ Edit this page ]` button at the bottom of _every_ content page

3. Make your edits to the document that opens in GitHub by clicking the ✎ (pencil) icon

4. Submit a PR with your changes and comments for context

::: note 

Please check all links before submitting a PR. If you are adding a new page, please add it to the sidebar in the `website/sidebars.js` file.

For more information on working with the sidebar, please refer to [Docusaurus documentation](https://docusaurus.io/docs/sidebar).

:::

## The Typical PR

This is the standard fork-branch-commit workflow for submitting pull requests to open source repositories

1. Create an issue for your proposed changes.

![](@site/static/img/wiki-contribute_issue.jpg)

1. Create a branch from the issue.

![](@site/static/img/wiki-contribute_submit-issue.jpg)

2. Checkout the branch locally and make your changes in the `/website` folder.

![](@site/static/img/wiki-contribute_create-branch-from-issue.jpg)
![](@site/static/img/wiki-contribute_create-branch.jpg)
![](@site/static/img/wiki-contribute_checkout-branch.jpg)

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

3. Make your edits.

4. Check that the project builds correctly
     ```sh
     # Start the site
     yarn build
     ```

5. Commit and push your changes. refence the issue you made in your commit message. e.g. `git commit -m "fix: #1234"`
   
6. If you do not have permissions to push to the repo, you will need to fork the repo and submit a PR from your fork. Please refer to the issue you created in step 1 for context.
7. Assign a reviewer to your PR. For now this will be [@humanman](https://github.com/humanman) or [@mrdevri](https://github.com/mrdevri)





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
[Word](overview/glossary.md#blockchain)
```

In the above example, you put the word you're defining inside a pair of `[]`, then you link the glossary page inside `()` with a `#` followed by the specific word you're linking to.

Images work the same way, but you use `@site/static/img/` instead of `overview/glossary.md#`:

If you want to flex your React skills, you can add a component to a page by changing the file extension from `.md` to `.mdx`. Reference the ["Using JSD in Markdown"](https://docusaurus.io/docs/markdown-features/react#using-jsx-in-markdown) page of Docusaurus for more details.



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