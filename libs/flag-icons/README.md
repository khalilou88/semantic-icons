# @semantic-icons/flag-icons

`@semantic-icons/flag-icons` helps developers to use [Flag icons](https://flagicons.lipis.dev) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/flag-icons | Angular   | Flag-icons |
| -------------------------- | --------- | ---------- |
| 0.x.x                      | >= 17.1.0 | 7.2.3      |

## Usage

First, install `@semantic-icons/flag-icons` from npm:

```sh
npm install @semantic-icons/flag-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiMaFlagIcon } from '@semantic-icons/flag-icons/square';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiMaFlagIcon],
  template: `
    <svg class="size-36" si-ma-flag-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The square shaped icons can be imported from `@semantic-icons/flag-icons/square`, the rectangle shaped icons can be imported from `@semantic-icons/flag-icons/rectangle`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the words `flag icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
