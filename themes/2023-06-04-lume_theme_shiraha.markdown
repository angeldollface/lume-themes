---
layout: "layouts/theme.njk"
title: "Lume Theme Shiraha"
isRemote: true
projectLink: "https://github.com/importantimport/lume_theme_shiraha/"
imageURL: "https://lume.land/img/showcase/lume_theme_shiraha.webp"
description: "❄️ Material 3-inspired Lume Blog Theme."
---

## Usage

```ts
// _config.ts
import lume from 'lume/mod.ts'

// from deno.land/x (stable)
import lts from 'https://deno.land/x/lume_theme_shiraha/mod.ts'

// from deno.land/x (specific version)
// import lts from 'https://deno.land/x/lume_theme_shiraha@0.0.3/mod.ts'

// from github (latest)
// import lts from 'https://raw.githubusercontent.com/importantimport/lume_theme_shiraha/main/mod.ts'

export default lume().use(lts())
```

## Features

### [FFF Flavored Frontmatter](https://fff.js.org)

Powerful and versatile Frontmatter format. If you were using [Urara](https://github.com/importantimport/urara) before, your postings will not require much modification to migrate.

### Material Design 3 with slight differences

This theme gets the Material Design-like styles from [Shiraha](https://github.com/importantimport/shiraha/tree/main/packages/shiraha).

### Color from featured image

Automatically generate theme colors for your articles with featured image through [Shiraha Colors](https://github.com/importantimport/shiraha/tree/main/packages/shiraha-colors).

### JSON Feed in Everythere

Provides a JSON Feed for each list: home, tags, categories... all can be subscribed via the reader.

### All-in-One, or just templates.

Lume Theme Shiraha has a complete set-up for you, including Lume and Remark / Rehype plugin. You can also use just the templates if you wish to customise them yourself.

All templates use `.tmpl.ts` and have no additional dependencies.

### View Transitions

> Currently you need to enable `#view-transition-on-navigation` manually in chrome://flags.

No need for additional Swup or Pjax, the most native page transition.

