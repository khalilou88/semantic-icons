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

import { SvgBellIcon } from '@semantic-icons/flag-icons/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SvgBellIcon],
  template: `
    <svg-bell-icon class="size-6" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The outline icons can be imported from `@semantic-icons/flag-icons/outline`, the filled icons can be imported from `@semantic-icons/flag-icons/solid`.

Icons use the Angular naming convention and are always prefixed with the word `svg` and suffixed with the word `icon`.

## License

MIT © 2024-2024 Khalil LAGRIDA
