# @semantic-icons/simple-icons

`@semantic-icons/simple-icons` helps developers to use [Simple icons](https://simpleicons.org/) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/simple-icons | Angular   | Simple Icons |
| ---------------------------- | --------- | ------------ |
| 0.x.x                        | >= 17.1.0 | 14.0.1       |

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
