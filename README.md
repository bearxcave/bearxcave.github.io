# GitHub Website with Jekyll

This repository contains a GitHub Pages-friendly Jekyll site with:

- A home page
- A blog index and sample posts
- A software demonstrations page

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address shown in the terminal.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Build the site with `bundle exec jekyll build`.
3. Publish the generated `_site` output with GitHub Pages, or use GitHub Actions to build and deploy the Jekyll site.

If your site is published from a project repository instead of a user repository, set `baseurl` in `_config.yml` to the repository name.

## Why this project does not use the `github-pages` gem

This starter uses plain Jekyll so it can run with a normal local Ruby setup. That gives you more control over gem versions and avoids the larger GitHub Pages dependency bundle.

This version also avoids optional plugins so it can run with only the `jekyll` gem installed.
