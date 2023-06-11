---
layout: "layouts/theme.njk"
title: "Lume Dark Material"
isRemote: true
projectLink: "https://github.com/angeldollface/lume-dark-material/"
imageURL: "https://lume.land/img/showcase/dark_material.webp"
description: "A simple material-design inspired theme for the Lume static-site generator."
---

## Usage

To get started with this theme, start a new Lume site! After that is done, make sure you add the import for *Lume Darkj Material* to your `_config.ts`.
This might look something like this:

```Typescript
import lume from "lume/mod.ts";
import blog from "https://raw.githubusercontent.com/angeldollface/lume-dark-material/main/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

The project's repository, which can be found [here](), has extra resources in the form of a "demo" project which has the bare minimum for you to get started with *Lume Dark Material*. A link to that is [here]()

If you want to customize your colors or styles, that can also be done. You must create a directory called `css` in the root of your Lume site and create a file called `index.scss`.

The colors are customizable by changing the variables to fonts and colors.
Here is what the `index.scss` of *Lume Dark Material* looks like:

```SCSS
$dropShadowColor: #111111;
$backgroundColor: #B399D4;
$accentColor: #FFFFFF;
$contrastColor: #000000;
$hoverColor: #808080;

$mainFont: 'SymbolFont';
$contentFont: 'FiraCode-Regular';

@import 'sass/lume-dark-material';
```

## Features

- Multiple options for customization.
- SEO
- Minimalist, clean design.
- Nothing that isn't needed is added.

