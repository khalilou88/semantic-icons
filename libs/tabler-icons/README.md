# @semantic-icons/tabler-icons

`@semantic-icons/tabler-icons` helps developers to use [tabler-icons icons](https://tabler-icons.com) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/tabler-icons | Angular   | Tabler-icons |
| ---------------------------- | --------- | ------------ |
| 0.x.x                        | >= 17.1.0 | 2.2.0        |

## Usage

First, install `@semantic-icons/tabler-icons` from npm:

```sh
npm install @semantic-icons/tabler-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgBeakerIcon } from '@semantic-icons/tabler-icons/24/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SvgBeakerIcon],
  template: `
    <svg-beaker-icon class="size-6 text-blue-500" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The 24x24 outline icons can be imported from `@semantic-icons/tabler-icons/24/outline`, the 24x24 solid icons can be imported from `@semantic-icons/tabler-icons/24/solid`, the 20x20 solid icons can be imported from `@semantic-icons/tabler-icons/20/solid`, and 16x16 solid icons can be imported from `@semantic-icons/tabler-icons/16/solid`.

Icons use the Angular naming convention and are always prefixed with the word `svg` and suffixed with the word `icon`.

## License

MIT © 2024-2024 Khalil LAGRIDA
