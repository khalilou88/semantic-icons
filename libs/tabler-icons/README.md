# @semantic-icons/tabler-icons

`@semantic-icons/tabler-icons` helps developers to use [Tabler icons](https://tabler.io/icons) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/tabler-icons | Angular   | Tabler-icons |
| ---------------------------- | --------- | ------------ |
| 0.x.x                        | >= 17.1.0 | 3.24.0       |

## Usage

First, install `@semantic-icons/tabler-icons` from npm:

```sh
npm install @semantic-icons/tabler-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiCakeIcon } from '@semantic-icons/tabler-icons/outline';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiCakeIcon],
  template: `
    <svg class="text-blue-500 size-6" si-cake-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The outline icons can be imported from `@semantic-icons/tabler-icons/outline`, the filled icons can be imported from `@semantic-icons/tabler-icons/filled`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the word `icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
