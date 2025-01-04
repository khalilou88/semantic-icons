# @semantic-icons/simple-icons

`@semantic-icons/simple-icons` helps developers to use [Simple icons](https://simpleicons.org/) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/simple-icons | Angular   | Simple Icons                                                                                                                                                                                                                                     |
| ---------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.x.x                        | >= 17.1.0 | ![Simple Icons version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkhalilou88%2Fsemantic-icons%2Fmain%2Fpackage.json&query=%24..devDependencies%5B'simple-icons'%5D&logo=simpleicons&label=version) |

## Usage

First, install `@semantic-icons/simple-icons` from npm:

```sh
npm install @semantic-icons/simple-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiGithubIcon } from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-home-page',
  imports: [SiGithubIcon],
  template: `
    <svg class="size-36" si-github-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
```

The icons can be imported from `@semantic-icons/simple-icons`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the word `icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
