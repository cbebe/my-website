# Website

This website is built using [Hugo](https://gohugo.io) and my own
[fork](https://github.com/cbebe/risotto) of
[risotto](https://github.com/joeroe/risotto).

## Scripts (`/bin`)

- `deploy` (Go)
  - Builds and deploys the website to GitHub Pages
  - Requires write access to the GitHub repository
- `packages` (Go)
  - Fetches all npm packages published by me (`cbebe`) from the NPM registry and
    writes it to a Markdown table
  - Requires `deno` to format the Markdown table
- `serve` (Go)
  - Serves the build output locally
- `make-turnip` (Shell)
  - Required for the Turnip Calculator page
  - Creates the `script` element load the bundled JavaScript

## Future Post Ideas (`/data/TODO.md`)

- To-do list of post ideas
- I will most likely be drawn away from my original ideas when I actually start
  writing
