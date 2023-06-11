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
- 3.) I'm assuming you have Deno and Git installed, so add the following lines to `_data/themes.json`:
    - `title`: The title of your theme.
    - `isRemote`: Are you loading the screenshot from this repo or from a remote URL? If it is local, copy your screenshot to the `assets` directory and set this flag to `false`. The screenshot has to have the size `1200 x 1800`.
    - `imageURL`: The URL to a scrreenshot that showcases your theme.
    - `description`: A description of your theme.
    - `themeLink`: A link that points to a web page that explains how one can get started with your theme.

```JSON
{
    "title": "Simple Blog Theme",
    "isRemote": false,
    "imageURL": "/assets/simple-blog-theme.png",
    "description": "Lume theme to create a simple blog.",
    "themeLink": "https://github.com/lumeland/theme-simple-blog"
}
```

- 4.) Edit the `_data/site.json` file and change this line: `"baseurl": ""` to this: `"baseurl": "/lume-themes"`.

- 5.) Check whether your theme shows up in the new version of the site by running this command from a terminal session: `deno task serve`. You can view the result on [localhost:3000](http://localhost:3000).

- 6.) If all is well, commit and push your changes. If not, make the neccessary adjustments.

- 7.) File a Pull Request! If everything works and the GitHub Action passes, I'll merge it with the main repo (this one).

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Deployment to GitHub Pages.

## NOTE :scroll:

- *Lume Themes :fire: :art:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.



