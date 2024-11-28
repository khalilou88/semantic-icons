# @semantic-icons/lucide-icons

`@semantic-icons/lucide-icons` helps developers to use [Lucide icons](https://lucide.dev/icons) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/lucide-icons | Angular   | Lucide-icons |
| ---------------------------- | --------- | ------------ |
| 0.x.x                        | >= 17.1.0 | 0.462.0      |

## Usage

First, install `@semantic-icons/lucide-icons` from npm:

```sh
npm install @semantic-icons/lucide-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgBirdIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SvgBirdIcon],
  template: `
    <svg-bird-icon class="text-blue-500 size-6" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The icons can be imported from `@semantic-icons/lucide-icons`.

Icons use the Angular naming convention and are always prefixed with the word `svg` and suffixed with the word `icon`.

## License

MIT © 2024-2024 Khalil LAGRIDA
