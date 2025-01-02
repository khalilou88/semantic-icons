# @semantic-icons/heroicons

`@semantic-icons/heroicons` helps developers to use [Heroicons](https://heroicons.com) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/heroicons | Angular   | Heroicons |
| ------------------------- | --------- | --------- |
| 0.x.x                     | >= 17.1.0 | 2.2.0     |

## Usage

First, install `@semantic-icons/heroicons` from npm:

```sh
npm install @semantic-icons/heroicons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiBeakerIcon } from '@semantic-icons/heroicons/24/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiBeakerIcon],
  template: `
    <svg class="size-6 text-blue-500" si-beaker-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The 24x24 outline icons can be imported from `@semantic-icons/heroicons/24/outline`, the 24x24 solid icons can be imported from `@semantic-icons/heroicons/24/solid`, the 20x20 solid icons can be imported from `@semantic-icons/heroicons/20/solid`, and 16x16 solid icons can be imported from `@semantic-icons/heroicons/16/solid`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the word `icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
