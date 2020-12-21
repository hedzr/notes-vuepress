# Hello, doc-site

This is a template repository for building your doc-site with vuepress.

A sample is [cmdr-docs](https://hedzr.github.io/cmdr-docs).

1. All you have to do is clicking the <kbd>Use this template</kbd> button upon this page.
2. run!


## Run as a local site

### First

```bash
yarn install
```

### And,

```bash
yarn dev # && open http://localhost:4000/notes-vuepress/

# use vuepress cli:
# vuepress build  # to build a static site
# vuepress dev    # run a dev server for composing and debugging
```

## Publish as github pages

Nothing to do, but the doc-site will be published as github pages automatically, so browse it at <https://hedzr.github.io/notes-vuepress>.

For more information, see also the github actions.


## Upgrade the deps and package.json

```bash
yarn upgrade-interactive --latest
```

## LICENSE

The source code is licensed under MIT.

Check the original repository for the 3rd-party libraries such as vuepress.
