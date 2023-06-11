# LUME THEMES :fire: :art:

[![LUME CI](https://github.com/angeldollface/lume-themes/actions/workflows/main.yml/badge.svg)](https://github.com/angeldollface/lume-themes/actions/workflows/main.yml)

***The official repository for the official web index of Lume themes! :fire: :art:***

## ABOUT :books:

Since [@oscarotero](https://github.com/oscarotero) created [Lume](https://lume.land), a static-site generator and people have been creating themes for this static-site generator, I thought it would be good to have a central website for traversing and looking for themes. This repository contains the source code for this website. This website is also a [Lume](https://lume.land)-powered site.

## USAGE :hammer:

To try this site on your own machine, you should have the following tools installed and available from the command line:

- [Deno](https://deno.land)
- [Git](https://git-scm.org)

To learn how to use this repository on your own machine follow these steps:

- 1.) Clone this project's source code:

```bash
git clone https://github.com/angeldollface/lume-themes/
```

- 2.) Change directory into the source code's root directory:

```bash
cd lume-themes
```

- 3.) Serve the built static site on `localhost`:

```bash
deno task serve
```

- 4.) If you want to compile this blog, use this command:

```bash
deno task build
```

## FOR THEME DEVELOPERS :art:

If you are a theme developer, please follow these steps:

- 1.) Fork this repository.
- 2.) Clone the forked repository to your machine.
- 3.) I'm assuming you have Deno and Git installed. Make a new file in `/themes` by the name of `YYYY-MM-DD-your-theme-name.markdowmn`.
- 4.) Fill it with this content:

```Markdown
---
layout: "layouts/theme.njk"
title: "Your theme name."
isRemote: true
projectLink: "Link to your theme's GitHub repository."
imageURL: "URL to a showcase of your theme."
description: "The description for your theme."
---

## YOUR CONTENT GOES HERE
```

- 5.) Here's a quick explanation of this sample:
    - `layout`: Do not modify this!
    - `title`: Your theme's title.
    - `isRemote`: Is the showcase image for your theme remote or are you storing it in this repo? If you are storing it in this repo, set this flag to `false`. Images go in the `assets` directory and should have a size `1200 x 1800`.
    - `projectLink`: The link to a GitHub repo of your theme.
    - `imageURL`: The URL to the screenshot showcasing your theme.
    - `description`: The description of your theme.
    - `## YOUR CONTENT GOES HERE.`: Provide instructions on how to get started with your theme!

- 6.) Change the line in `_data/site.json` that goes like this: `"baseurl": ""` to this: `"baseurl": "/lume-themes"`.

- 7.) Run `deno task serve` and visit [localhost:3000](https://localhost:3000).

- 8.) If everything is OK, change the "baseurl" variable to what it was.

- 9.) Stage, commit, and push your changes.

- 10.) File a Pull Request.

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Deployment to GitHub Pages.

## NOTE :scroll:

- *Lume Themes :fire: :art:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.



